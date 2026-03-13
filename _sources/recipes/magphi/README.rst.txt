:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'magphi'
.. highlight: bash

magphi
======

.. conda:recipe:: magphi
   :replaces_section_title:
   :noindex:

   A bioinformatics tool allowing for examnination and extraction of genomic features using seed sequences.

   :homepage: https://github.com/milnus/Magphi
   :documentation: https://github.com/milnus/Magphi/wiki
   
   :license: MIT / MIT
   :recipe: /`magphi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/magphi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/magphi/meta.yaml>`_

   


.. conda:package:: magphi

   |downloads_magphi| |docker_magphi|

   :versions:
      
      

      ``2.0.2-0``,  ``2.0.0-0``,  ``1.0.1-0``,  ``0.1.6-0``,  ``0.1.3-0``

      

   
   :depends on biopython: ``>=1.79``
   :depends on blast: ``>=2.12.0``
   :depends on numpy: ``1.21.2``
   :depends on pybedtools: ``0.8.2``
   :depends on python: ``>=3.9``
   :depends on samtools: ``1.11``

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install magphi

to add into an existing workspace instead, run::

    pixi add magphi

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install magphi

Alternatively, to install into a new environment, run::

    conda create -n envname magphi

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/magphi:<tag>

(see `magphi/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_magphi| image:: https://img.shields.io/conda/dn/bioconda/magphi.svg?style=flat
   :target: https://anaconda.org/bioconda/magphi
   :alt:   (downloads)
.. |docker_magphi| image:: https://quay.io/repository/biocontainers/magphi/status
   :target: https://quay.io/repository/biocontainers/magphi
.. _`magphi/tags`: https://quay.io/repository/biocontainers/magphi?tab=tags


.. raw:: html

    <script>
        var package = "magphi";
        var versions = ["2.0.2","2.0.0","1.0.1","0.1.6","0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/magphi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/magphi/README.html
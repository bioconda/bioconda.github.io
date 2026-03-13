:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ditasic'
.. highlight: bash

ditasic
=======

.. conda:recipe:: ditasic
   :replaces_section_title:
   :noindex:

   DiTASiC is designed as a comprehensive approach for abundance estimation and differential abundance assessment of individual taxa in metagenomics samples.

   :homepage: https://rki_bioinformatics.gitlab.io/ditasic/
   :license: MIT
   :recipe: /`ditasic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ditasic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ditasic/meta.yaml>`_

   


.. conda:package:: ditasic

   |downloads_ditasic| |docker_ditasic|

   :versions:
      
      

      ``0.2-2``,  ``0.2-1``,  ``0.2-0``

      

   
   :depends on biopython: ``>=1.70``
   :depends on kallisto: ``>=0.43.1``
   :depends on mason: ``>=2.0.7``
   :depends on numpy: ``>=1.8.0``
   :depends on python: ``>=3``

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

    pixi global install ditasic

to add into an existing workspace instead, run::

    pixi add ditasic

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ditasic

Alternatively, to install into a new environment, run::

    conda create -n envname ditasic

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ditasic:<tag>

(see `ditasic/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ditasic| image:: https://img.shields.io/conda/dn/bioconda/ditasic.svg?style=flat
   :target: https://anaconda.org/bioconda/ditasic
   :alt:   (downloads)
.. |docker_ditasic| image:: https://quay.io/repository/biocontainers/ditasic/status
   :target: https://quay.io/repository/biocontainers/ditasic
.. _`ditasic/tags`: https://quay.io/repository/biocontainers/ditasic?tab=tags


.. raw:: html

    <script>
        var package = "ditasic";
        var versions = ["0.2","0.2","0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ditasic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ditasic/README.html
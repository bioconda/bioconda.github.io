:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deepsig'
.. highlight: bash

deepsig
=======

.. conda:recipe:: deepsig
   :replaces_section_title:
   :noindex:

   Predictor of signal peptides in proteins based on deep learning

   :homepage: https://github.com/BolognaBiocomp/deepsig
   :license: GPL / GPLv3
   :recipe: /`deepsig <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepsig>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepsig/meta.yaml>`_

   


.. conda:package:: deepsig

   |downloads_deepsig| |docker_deepsig|

   :versions:
      
      

      ``1.2.5-1``,  ``1.2.5-0``,  ``1.2.4-0``,  ``1.2.3-0``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends on biopython: ``>=1.78``
   :depends on keras: ``2.4.3.*``
   :depends on numpy: ``1.23.*``
   :depends on python: ``=3.8,<3.9``
   :depends on tensorflow: ``2.2.0.*``

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

    pixi global install deepsig

to add into an existing workspace instead, run::

    pixi add deepsig

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install deepsig

Alternatively, to install into a new environment, run::

    conda create -n envname deepsig

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/deepsig:<tag>

(see `deepsig/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_deepsig| image:: https://img.shields.io/conda/dn/bioconda/deepsig.svg?style=flat
   :target: https://anaconda.org/bioconda/deepsig
   :alt:   (downloads)
.. |docker_deepsig| image:: https://quay.io/repository/biocontainers/deepsig/status
   :target: https://quay.io/repository/biocontainers/deepsig
.. _`deepsig/tags`: https://quay.io/repository/biocontainers/deepsig?tab=tags


.. raw:: html

    <script>
        var package = "deepsig";
        var versions = ["1.2.5","1.2.5","1.2.4","1.2.3","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deepsig/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deepsig/README.html
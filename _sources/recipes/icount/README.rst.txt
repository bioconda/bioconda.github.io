:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'icount'
.. highlight: bash

icount
======

.. conda:recipe:: icount
   :replaces_section_title:
   :noindex:

   Computational pipeline for analysis of iCLIP data

   :homepage: https://github.com/tomazc/iCount
   :license: MIT / MIT
   :recipe: /`icount <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/icount>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/icount/meta.yaml>`_

   iCount is a Python module and associated command\-line interface \(CLI\)\, which provides all the commands needed to process iCLIP data on protein\-RNA interactions.


.. conda:package:: icount

   |downloads_icount| |docker_icount|

   :versions:
      
      

      ``2.0.0-1``,  ``2.0.0-0``

      

   
   :depends bedtools: ``>=2.26.0``
   :depends cutadapt: ``>=1.10``
   :depends matplotlib: 
   :depends numpy: 
   :depends numpydoc: 
   :depends pandas: 
   :depends pybedtools: 
   :depends pysam: 
   :depends python: ``>=3``
   :depends sphinx: ``>=1.4``
   :depends star: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install icount

   and update with::

      mamba update icount

  To create a new environment, run::

      mamba create --name myenvname icount

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/icount:<tag>

   (see `icount/tags`_ for valid values for ``<tag>``)


.. |downloads_icount| image:: https://img.shields.io/conda/dn/bioconda/icount.svg?style=flat
   :target: https://anaconda.org/bioconda/icount
   :alt:   (downloads)
.. |docker_icount| image:: https://quay.io/repository/biocontainers/icount/status
   :target: https://quay.io/repository/biocontainers/icount
.. _`icount/tags`: https://quay.io/repository/biocontainers/icount?tab=tags


.. raw:: html

    <script>
        var package = "icount";
        var versions = ["2.0.0","2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/icount/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/icount/README.html
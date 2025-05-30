:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genedom'
.. highlight: bash

genedom
=======

.. conda:recipe:: genedom
   :replaces_section_title:
   :noindex:

   Genetic part standardization.

   :homepage: https://github.com/Edinburgh-Genome-Foundry/genedom
   :license: MIT / MIT
   :recipe: /`genedom <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genedom>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genedom/meta.yaml>`_

   


.. conda:package:: genedom

   |downloads_genedom| |docker_genedom|

   :versions:
      
      

      ``0.2.2-0``,  ``0.2.1-0``

      

   
   :depends dna_features_viewer: 
   :depends dnachisel: 
   :depends flametree: 
   :depends openpyxl: 
   :depends pandas: 
   :depends pdf-reports: 
   :depends python: 
   :depends python-box: 
   :depends sequenticon: 
   :depends snapgene-reader: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install genedom

   and update with::

      mamba update genedom

  To create a new environment, run::

      mamba create --name myenvname genedom

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/genedom:<tag>

   (see `genedom/tags`_ for valid values for ``<tag>``)


.. |downloads_genedom| image:: https://img.shields.io/conda/dn/bioconda/genedom.svg?style=flat
   :target: https://anaconda.org/bioconda/genedom
   :alt:   (downloads)
.. |docker_genedom| image:: https://quay.io/repository/biocontainers/genedom/status
   :target: https://quay.io/repository/biocontainers/genedom
.. _`genedom/tags`: https://quay.io/repository/biocontainers/genedom?tab=tags


.. raw:: html

    <script>
        var package = "genedom";
        var versions = ["0.2.2","0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genedom/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genedom/README.html
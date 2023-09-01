:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ncbi-genome-download'
.. highlight: bash

ncbi-genome-download
====================

.. conda:recipe:: ncbi-genome-download
   :replaces_section_title:
   :noindex:

   Download genome files from the NCBI FTP server.

   :homepage: https://github.com/kblin/ncbi-genome-download/
   :license: Apache / Apache Software License
   :recipe: /`ncbi-genome-download <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncbi-genome-download>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncbi-genome-download/meta.yaml>`_

   


.. conda:package:: ncbi-genome-download

   |downloads_ncbi-genome-download| |docker_ncbi-genome-download|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.3-0</code>,  <code>0.3.2-0</code>,  <code>0.3.1-1</code>,  <code>0.3.1-0</code>,  <code>0.3.0-1</code>,  <code>0.3.0-0</code>,  <code>0.2.12-0</code>,  <code>0.2.11-0</code>,  <code>0.2.10-0</code>,  </span></summary>
      

      ``0.3.3-0``,  ``0.3.2-0``,  ``0.3.1-1``,  ``0.3.1-0``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.12-0``,  ``0.2.11-0``,  ``0.2.10-0``,  ``0.2.9-0``,  ``0.2.8-1``,  ``0.2.8-0``,  ``0.2.7-0``,  ``0.2.6-1``,  ``0.2.6-0``,  ``0.2.5-1``,  ``0.2.5-0``,  ``0.2.4-0``,  ``0.2.2-0``,  ``0.2.0-0``,  ``0.1.8-0``

      
      .. raw:: html

         </details>
      

   
   :depends appdirs: 
   :depends python: 
   :depends requests: ``>=2.4.3``
   :depends tqdm: 
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

      mamba install ncbi-genome-download

   and update with::

      mamba update ncbi-genome-download

  To create a new environment, run::

      mamba create --name myenvname ncbi-genome-download

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ncbi-genome-download:<tag>

   (see `ncbi-genome-download/tags`_ for valid values for ``<tag>``)


.. |downloads_ncbi-genome-download| image:: https://img.shields.io/conda/dn/bioconda/ncbi-genome-download.svg?style=flat
   :target: https://anaconda.org/bioconda/ncbi-genome-download
   :alt:   (downloads)
.. |docker_ncbi-genome-download| image:: https://quay.io/repository/biocontainers/ncbi-genome-download/status
   :target: https://quay.io/repository/biocontainers/ncbi-genome-download
.. _`ncbi-genome-download/tags`: https://quay.io/repository/biocontainers/ncbi-genome-download?tab=tags


.. raw:: html

    <script>
        var package = "ncbi-genome-download";
        var versions = ["0.3.3","0.3.2","0.3.1","0.3.1","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ncbi-genome-download/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ncbi-genome-download/README.html
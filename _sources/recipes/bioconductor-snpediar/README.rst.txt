:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-snpediar'
.. highlight: bash

bioconductor-snpediar
=====================

.. conda:recipe:: bioconductor-snpediar
   :replaces_section_title:
   :noindex:

   Query data from SNPedia

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/SNPediaR.html
   :license: GPL-2
   :recipe: /`bioconductor-snpediar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-snpediar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-snpediar/meta.yaml>`_
   :links: biotools: :biotools:`snpediar`, doi: :doi:`10.1007/978-1-4419-9863-7_1039`

   SNPediaR provides some tools for downloading and parsing data from the SNPedia web site \<http\:\/\/www.snpedia.com\>. The implemented functions allow users to import the wiki text available in SNPedia pages and to extract the most relevant information out of them. If some information in the downloaded pages is not automatically processed by the library functions\, users can easily implement their own parsers to access it in an efficient way.


.. conda:package:: bioconductor-snpediar

   |downloads_bioconductor-snpediar| |docker_bioconductor-snpediar|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-jsonlite: 
   :depends r-rcurl: 
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

      mamba install bioconductor-snpediar

   and update with::

      mamba update bioconductor-snpediar

  To create a new environment, run::

      mamba create --name myenvname bioconductor-snpediar

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-snpediar:<tag>

   (see `bioconductor-snpediar/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-snpediar| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-snpediar.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-snpediar
   :alt:   (downloads)
.. |docker_bioconductor-snpediar| image:: https://quay.io/repository/biocontainers/bioconductor-snpediar/status
   :target: https://quay.io/repository/biocontainers/bioconductor-snpediar
.. _`bioconductor-snpediar/tags`: https://quay.io/repository/biocontainers/bioconductor-snpediar?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-snpediar";
        var versions = ["1.32.0","1.28.0","1.26.0","1.24.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-snpediar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-snpediar/README.html
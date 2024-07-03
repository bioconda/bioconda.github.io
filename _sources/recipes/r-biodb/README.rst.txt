:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-biodb'
.. highlight: bash

r-biodb
=======

.. conda:recipe:: r-biodb
   :replaces_section_title:
   :noindex:

   An R package for connecting to chemical and biological databases.

   :homepage: https://github.com/pkrog/biodb
   :license: AGPL-3.0
   :recipe: /`r-biodb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-biodb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-biodb/meta.yaml>`_

   


.. conda:package:: r-biodb

   |downloads_r-biodb| |docker_r-biodb|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.2-9</code>,  <code>1.2.2-8</code>,  <code>1.2.2-7</code>,  <code>1.2.2-6</code>,  <code>1.2.2-5</code>,  <code>1.2.2-4</code>,  <code>1.2.2-3</code>,  <code>1.2.2-2</code>,  <code>1.2.2-1</code>,  </span></summary>
      

      ``1.2.2-9``,  ``1.2.2-8``,  ``1.2.2-7``,  ``1.2.2-6``,  ``1.2.2-5``,  ``1.2.2-4``,  ``1.2.2-3``,  ``1.2.2-2``,  ``1.2.2-1``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.2.0-1``,  ``1.2.0rc2-1``,  ``1.2.0rc2-0``,  ``1.2.0a-0``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.2-1``,  ``1.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-bitops: 
   :depends r-digest: 
   :depends r-jsonlite: 
   :depends r-plyr: 
   :depends r-r.utils: 
   :depends r-rcpp: 
   :depends r-rcurl: 
   :depends r-stringr: 
   :depends r-xml: 
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

      mamba install r-biodb

   and update with::

      mamba update r-biodb

  To create a new environment, run::

      mamba create --name myenvname r-biodb

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-biodb:<tag>

   (see `r-biodb/tags`_ for valid values for ``<tag>``)


.. |downloads_r-biodb| image:: https://img.shields.io/conda/dn/bioconda/r-biodb.svg?style=flat
   :target: https://anaconda.org/bioconda/r-biodb
   :alt:   (downloads)
.. |docker_r-biodb| image:: https://quay.io/repository/biocontainers/r-biodb/status
   :target: https://quay.io/repository/biocontainers/r-biodb
.. _`r-biodb/tags`: https://quay.io/repository/biocontainers/r-biodb?tab=tags


.. raw:: html

    <script>
        var package = "r-biodb";
        var versions = ["1.2.2","1.2.2","1.2.2","1.2.2","1.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-biodb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-biodb/README.html
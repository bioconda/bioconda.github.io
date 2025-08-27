:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gnu-wget'
.. highlight: bash

gnu-wget
========

.. conda:recipe:: gnu-wget
   :replaces_section_title:
   :noindex:

   Retrieve files using HTTP\, HTTPS and FTP

   :homepage: http://www.gnu.org/software/wget/
   :license: GPLv3
   :recipe: /`gnu-wget <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gnu-wget>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gnu-wget/meta.yaml>`_

   


.. conda:package:: gnu-wget

   |downloads_gnu-wget| |docker_gnu-wget|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18-10</code>,  <code>1.18-9</code>,  <code>1.18-8</code>,  <code>1.18-7</code>,  <code>1.18-6</code>,  <code>1.18-5</code>,  <code>1.18-4</code>,  <code>1.18-3</code>,  <code>1.18-2</code>,  </span></summary>
      

      ``1.18-10``,  ``1.18-9``,  ``1.18-8``,  ``1.18-7``,  ``1.18-6``,  ``1.18-5``,  ``1.18-4``,  ``1.18-3``,  ``1.18-2``,  ``1.18-1``,  ``1.18-0``

      
      .. raw:: html

         </details>
      

   
   :depends libidn2: ``>=2,<3.0a0``
   :depends libunistring: ``>=0,<1.0a0``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends openssl: ``1.0.2n.*``
   :depends zlib: 
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

      mamba install gnu-wget

   and update with::

      mamba update gnu-wget

  To create a new environment, run::

      mamba create --name myenvname gnu-wget

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gnu-wget:<tag>

   (see `gnu-wget/tags`_ for valid values for ``<tag>``)


.. |downloads_gnu-wget| image:: https://img.shields.io/conda/dn/bioconda/gnu-wget.svg?style=flat
   :target: https://anaconda.org/bioconda/gnu-wget
   :alt:   (downloads)
.. |docker_gnu-wget| image:: https://quay.io/repository/biocontainers/gnu-wget/status
   :target: https://quay.io/repository/biocontainers/gnu-wget
.. _`gnu-wget/tags`: https://quay.io/repository/biocontainers/gnu-wget?tab=tags


.. raw:: html

    <script>
        var package = "gnu-wget";
        var versions = ["1.18","1.18","1.18","1.18","1.18"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gnu-wget/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gnu-wget/README.html
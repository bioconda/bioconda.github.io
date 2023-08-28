:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nim-falcon'
.. highlight: bash

nim-falcon
==========

.. conda:recipe:: nim-falcon
   :replaces_section_title:
   :noindex:

   Nim\-based executables used by Falcon assembly workflow

   :homepage: https://github.com/bio-nim/nim-falcon
   :license: MIT
   :recipe: /`nim-falcon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nim-falcon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nim-falcon/meta.yaml>`_

   


.. conda:package:: nim-falcon

   |downloads_nim-falcon| |docker_nim-falcon|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.0.2-1</code>,  <code>3.0.2-0</code>,  <code>3.0.1-0</code>,  <code>2.3.0-0</code>,  <code>1.10.1-0</code>,  <code>1.8.0-0</code>,  <code>1.7.0-0</code>,  <code>1.5.1-0</code>,  <code>1.5.0-0</code>,  </span></summary>
      

      ``3.0.2-1``,  ``3.0.2-0``,  ``3.0.1-0``,  ``2.3.0-0``,  ``1.10.1-0``,  ``1.8.0-0``,  ``1.7.0-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.0.1-1``,  ``0.0.1-0``,  ``0.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends htslib: ``>=1.10.2,<1.11.0a0``
   :depends pcre: ``>=8.44,<9.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install nim-falcon

   and update with::

      mamba update nim-falcon

  To create a new environment, run::

      mamba create --name myenvname nim-falcon

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nim-falcon:<tag>

   (see `nim-falcon/tags`_ for valid values for ``<tag>``)


.. |downloads_nim-falcon| image:: https://img.shields.io/conda/dn/bioconda/nim-falcon.svg?style=flat
   :target: https://anaconda.org/bioconda/nim-falcon
   :alt:   (downloads)
.. |docker_nim-falcon| image:: https://quay.io/repository/biocontainers/nim-falcon/status
   :target: https://quay.io/repository/biocontainers/nim-falcon
.. _`nim-falcon/tags`: https://quay.io/repository/biocontainers/nim-falcon?tab=tags


.. raw:: html

    <script>
        var package = "nim-falcon";
        var versions = ["3.0.2","3.0.2","3.0.1","2.3.0","1.10.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nim-falcon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nim-falcon/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gsalign'
.. highlight: bash

gsalign
=======

.. conda:recipe:: gsalign
   :replaces_section_title:
   :noindex:

   GSAlign\: An ultra\-fast sequence alignment tool

   :homepage: https://github.com/hsinnan75/GSAlign
   :license: MIT / MIT
   :recipe: /`gsalign <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gsalign>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gsalign/meta.yaml>`_
   :links: doi: :doi:`10.1101/782193`

   An ultra\-fast sequence alignment tool for genome sequence comparison.


.. conda:package:: gsalign

   |downloads_gsalign| |docker_gsalign|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.22-8</code>,  <code>1.0.22-7</code>,  <code>1.0.22-6</code>,  <code>1.0.22-5</code>,  <code>1.0.22-4</code>,  <code>1.0.22-3</code>,  <code>1.0.22-2</code>,  <code>1.0.22-1</code>,  <code>1.0.22-0</code>,  </span></summary>
      

      ``1.0.22-8``,  ``1.0.22-7``,  ``1.0.22-6``,  ``1.0.22-5``,  ``1.0.22-4``,  ``1.0.22-3``,  ``1.0.22-2``,  ``1.0.22-1``,  ``1.0.22-0``,  ``1.0.21-0``,  ``1.0.20-0``,  ``1.0.16-0``,  ``1.0.15-0``,  ``1.0.14-0``,  ``1.0.13-0``,  ``1.0.12-0``,  ``1.0.11-0``,  ``1.0.10-0``,  ``1.0.9-0``,  ``1.0.8-0``,  ``1.0.7-1``,  ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends boost-cpp: 
   :depends libgcc: ``>=13``
   :depends liblzma: ``>=5.8.1,<6.0a0``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install gsalign

   and update with::

      mamba update gsalign

  To create a new environment, run::

      mamba create --name myenvname gsalign

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gsalign:<tag>

   (see `gsalign/tags`_ for valid values for ``<tag>``)


.. |downloads_gsalign| image:: https://img.shields.io/conda/dn/bioconda/gsalign.svg?style=flat
   :target: https://anaconda.org/bioconda/gsalign
   :alt:   (downloads)
.. |docker_gsalign| image:: https://quay.io/repository/biocontainers/gsalign/status
   :target: https://quay.io/repository/biocontainers/gsalign
.. _`gsalign/tags`: https://quay.io/repository/biocontainers/gsalign?tab=tags


.. raw:: html

    <script>
        var package = "gsalign";
        var versions = ["1.0.22","1.0.22","1.0.22","1.0.22","1.0.22"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gsalign/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gsalign/README.html
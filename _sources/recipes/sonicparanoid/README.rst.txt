:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sonicparanoid'
.. highlight: bash

sonicparanoid
=============

.. conda:recipe:: sonicparanoid
   :replaces_section_title:
   :noindex:

   SonicParanoid\: fast\, accurate\, and comprehensive orthology inference with machine learning and language models

   :homepage: https://gitlab.com/salvo981/sonicparanoid2
   :documentation: https://gitlab.com/salvo981/sonicparanoid2/-/wikis/home
   
   :license: GPL3 / GPL-3.0-only
   :recipe: /`sonicparanoid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sonicparanoid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sonicparanoid/meta.yaml>`_
   :links: doi: :doi:`10.1101/2023.05.14.540736`, doi: :doi:`10.1093/bioinformatics/bty631`, biotools: :biotools:`SonicParanoid`

   


.. conda:package:: sonicparanoid

   |downloads_sonicparanoid| |docker_sonicparanoid|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.9-0</code>,  <code>2.0.8-1</code>,  <code>2.0.8-0</code>,  <code>2.0.7-0</code>,  <code>1.3.8-4</code>,  <code>1.3.8-3</code>,  <code>1.3.8-2</code>,  <code>1.3.8-1</code>,  <code>1.3.8-0</code>,  </span></summary>
      

      ``2.0.9-0``,  ``2.0.8-1``,  ``2.0.8-0``,  ``2.0.7-0``,  ``1.3.8-4``,  ``1.3.8-3``,  ``1.3.8-2``,  ``1.3.8-1``,  ``1.3.8-0``,  ``1.3.7-0``,  ``1.3.6-1``,  ``1.3.6-0``,  ``1.0.14-4``,  ``1.0.14-3``,  ``1.0.14-2``,  ``1.0.14-1``,  ``1.0.14-0``,  ``1.0.13-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: ``>=1.83``
   :depends blast: ``>=2.12.0``
   :depends diamond: ``>=2.0.12``
   :depends filetype: ``>=1.2.0``
   :depends gdown: ``>=5.2.0``
   :depends gensim: ``>=4.2.0``
   :depends libgcc: ``>=13``
   :depends mcl: ``>=14.137``
   :depends mmseqs2: ``>=13.45111``
   :depends mypy: ``>=1.10.0``
   :depends numpy: ``>=1.22.4,<2.0a0``
   :depends pandas: ``>=2.2.0``
   :depends psutil: ``>=6.0.0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends scikit-learn: ``>=1.5.0``
   :depends scipy: ``<1.13``
   :depends smart-open: ``>=7.0.1``
   :depends tqdm: ``>=4.66.0``
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

      mamba install sonicparanoid

   and update with::

      mamba update sonicparanoid

  To create a new environment, run::

      mamba create --name myenvname sonicparanoid

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sonicparanoid:<tag>

   (see `sonicparanoid/tags`_ for valid values for ``<tag>``)


.. |downloads_sonicparanoid| image:: https://img.shields.io/conda/dn/bioconda/sonicparanoid.svg?style=flat
   :target: https://anaconda.org/bioconda/sonicparanoid
   :alt:   (downloads)
.. |docker_sonicparanoid| image:: https://quay.io/repository/biocontainers/sonicparanoid/status
   :target: https://quay.io/repository/biocontainers/sonicparanoid
.. _`sonicparanoid/tags`: https://quay.io/repository/biocontainers/sonicparanoid?tab=tags


.. raw:: html

    <script>
        var package = "sonicparanoid";
        var versions = ["2.0.9","2.0.8","2.0.8","2.0.7","1.3.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sonicparanoid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sonicparanoid/README.html
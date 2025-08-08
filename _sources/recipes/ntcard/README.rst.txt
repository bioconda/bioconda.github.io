:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ntcard'
.. highlight: bash

ntcard
======

.. conda:recipe:: ntcard
   :replaces_section_title:
   :noindex:

   Estimating k\-mer coverage histogram of genomics data.

   :homepage: https://github.com/bcgsc/ntCard
   :documentation: https://github.com/bcgsc/ntCard/blob/1.2.2/README.md
   
   :license: MIT / MIT
   :recipe: /`ntcard <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ntcard>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ntcard/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btw832`

   


.. conda:package:: ntcard

   |downloads_ntcard| |docker_ntcard|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.2-7</code>,  <code>1.2.2-6</code>,  <code>1.2.2-5</code>,  <code>1.2.2-4</code>,  <code>1.2.2-3</code>,  <code>1.2.2-2</code>,  <code>1.2.2-1</code>,  <code>1.2.2-0</code>,  <code>1.2.1-0</code>,  </span></summary>
      

      ``1.2.2-7``,  ``1.2.2-6``,  ``1.2.2-5``,  ``1.2.2-4``,  ``1.2.2-3``,  ``1.2.2-2``,  ``1.2.2-1``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libgcc: ``>=13``
   :depends libgomp: 
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
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

      mamba install ntcard

   and update with::

      mamba update ntcard

  To create a new environment, run::

      mamba create --name myenvname ntcard

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ntcard:<tag>

   (see `ntcard/tags`_ for valid values for ``<tag>``)


.. |downloads_ntcard| image:: https://img.shields.io/conda/dn/bioconda/ntcard.svg?style=flat
   :target: https://anaconda.org/bioconda/ntcard
   :alt:   (downloads)
.. |docker_ntcard| image:: https://quay.io/repository/biocontainers/ntcard/status
   :target: https://quay.io/repository/biocontainers/ntcard
.. _`ntcard/tags`: https://quay.io/repository/biocontainers/ntcard?tab=tags


.. raw:: html

    <script>
        var package = "ntcard";
        var versions = ["1.2.2","1.2.2","1.2.2","1.2.2","1.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ntcard/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ntcard/README.html
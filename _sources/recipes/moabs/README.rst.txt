:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'moabs'
.. highlight: bash

moabs
=====

.. conda:recipe:: moabs
   :replaces_section_title:
   :noindex:

   Methylation analysis on Bisulfite\-Sequencing reads

   :homepage: https://github.com/sunnyisgalaxy/moabs
   :license: MIT
   :recipe: /`moabs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/moabs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/moabs/meta.yaml>`_
   :links: doi: :doi:`10.1021/acs.jproteome.8b00708`, usegalaxy-eu: :usegalaxy-eu:`moabs`

   


.. conda:package:: moabs

   |downloads_moabs| |docker_moabs|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.9.6-6</code>,  <code>1.3.9.6-5</code>,  <code>1.3.9.6-4</code>,  <code>1.3.9.6-3</code>,  <code>1.3.9.6-2</code>,  <code>1.3.9.6-1</code>,  <code>1.3.9.6-0</code>,  <code>1.3.9.5-0</code>,  <code>1.3.9.4-0</code>,  </span></summary>
      

      ``1.3.9.6-6``,  ``1.3.9.6-5``,  ``1.3.9.6-4``,  ``1.3.9.6-3``,  ``1.3.9.6-2``,  ``1.3.9.6-1``,  ``1.3.9.6-0``,  ``1.3.9.5-0``,  ``1.3.9.4-0``,  ``1.3.9.3-0``,  ``1.3.9.2-0``,  ``1.3.9.0-0``,  ``1.3.8.9-0``,  ``1.3.8.8-0``,  ``1.3.8.7-0``,  ``1.3.8.6-1``,  ``1.3.8.6-0``,  ``1.3.8.5-0``,  ``1.3.8.4-2``,  ``1.3.8.4-1``,  ``1.3.8.4-0``,  ``1.3.8.2-0``,  ``1.3.8.1-1``,  ``1.3.8.1-0``,  ``1.3.7.9-1``,  ``1.3.7.9-0``,  ``1.3.7.8-0``,  ``1.3.7.7-0``,  ``1.3.7.6-0``,  ``1.3.7.5-0``,  ``1.3.4.6-0``,  ``1.3.4.5-1``,  ``1.3.4.5-0``,  ``1.3.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends boost-cpp: ``>=1.78.0,<1.78.1.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends ncurses: ``>=6.3,<7.0a0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-config-simple: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends wget: 
   :depends zlib: 
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

      mamba install moabs

   and update with::

      mamba update moabs

  To create a new environment, run::

      mamba create --name myenvname moabs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/moabs:<tag>

   (see `moabs/tags`_ for valid values for ``<tag>``)


.. |downloads_moabs| image:: https://img.shields.io/conda/dn/bioconda/moabs.svg?style=flat
   :target: https://anaconda.org/bioconda/moabs
   :alt:   (downloads)
.. |docker_moabs| image:: https://quay.io/repository/biocontainers/moabs/status
   :target: https://quay.io/repository/biocontainers/moabs
.. _`moabs/tags`: https://quay.io/repository/biocontainers/moabs?tab=tags


.. raw:: html

    <script>
        var package = "moabs";
        var versions = ["1.3.9.6","1.3.9.6","1.3.9.6","1.3.9.6","1.3.9.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/moabs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/moabs/README.html
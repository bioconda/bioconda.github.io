:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mcl'
.. highlight: bash

mcl
===

.. conda:recipe:: mcl
   :replaces_section_title:
   :noindex:

   MCL \- a cluster algorithm for graphs.

   :homepage: https://micans.org/mcl
   :documentation: https://micans.org/mcl/man/mcl.html
   
   :developer docs: https://github.com/micans/mcl
   :license: GPL / GPL-3.0-only
   :recipe: /`mcl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mcl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mcl/meta.yaml>`_
   :links: doi: :doi:`10.1137/040608635`, doi: :doi:`10.1093/nar/30.7.1575`, biotools: :biotools:`mcl`, usegalaxy-eu: :usegalaxy-eu:`mcl`

   


.. conda:package:: mcl

   |downloads_mcl| |docker_mcl|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>22.282-2</code>,  <code>22.282-1</code>,  <code>22.282-0</code>,  <code>14.137-9</code>,  <code>14.137-8</code>,  <code>14.137-7</code>,  <code>14.137-6</code>,  <code>14.137-5</code>,  <code>14.137-4</code>,  </span></summary>
      

      ``22.282-2``,  ``22.282-1``,  ``22.282-0``,  ``14.137-9``,  ``14.137-8``,  ``14.137-7``,  ``14.137-6``,  ``14.137-5``,  ``14.137-4``,  ``14.137-3``,  ``14.137-2``,  ``14.137-1``,  ``14.137-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install mcl

   and update with::

      mamba update mcl

  To create a new environment, run::

      mamba create --name myenvname mcl

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mcl:<tag>

   (see `mcl/tags`_ for valid values for ``<tag>``)


.. |downloads_mcl| image:: https://img.shields.io/conda/dn/bioconda/mcl.svg?style=flat
   :target: https://anaconda.org/bioconda/mcl
   :alt:   (downloads)
.. |docker_mcl| image:: https://quay.io/repository/biocontainers/mcl/status
   :target: https://quay.io/repository/biocontainers/mcl
.. _`mcl/tags`: https://quay.io/repository/biocontainers/mcl?tab=tags


.. raw:: html

    <script>
        var package = "mcl";
        var versions = ["22.282","22.282","22.282","14.137","14.137"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mcl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mcl/README.html
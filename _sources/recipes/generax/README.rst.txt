:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'generax'
.. highlight: bash

generax
=======

.. conda:recipe:: generax
   :replaces_section_title:
   :noindex:

   GeneRax\: a parallel tool for species tree\-aware maximum likelihood based gene tree inference under gene duplication\, transfer\, and loss.

   :homepage: https://github.com/benoitmorel/generax
   :license: AGPL / AGPL-3.0-only
   :recipe: /`generax <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/generax>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/generax/meta.yaml>`_
   :links: doi: :doi:`10.1101/779066`

   


.. conda:package:: generax

   |downloads_generax| |docker_generax|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.1.3-1</code>,  <code>2.1.3-0</code>,  <code>2.0.4-3</code>,  <code>2.0.4-2</code>,  <code>2.0.4-1</code>,  <code>2.0.4-0</code>,  <code>2.0.2-0</code>,  <code>2.0.1-0</code>,  <code>1.2.3-0</code>,  </span></summary>
      

      ``2.1.3-1``,  ``2.1.3-0``,  ``2.0.4-3``,  ``2.0.4-2``,  ``2.0.4-1``,  ``2.0.4-0``,  ``2.0.2-0``,  ``2.0.1-0``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends openmpi: ``>=4.1.6,<5.0a0``
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

      mamba install generax

   and update with::

      mamba update generax

  To create a new environment, run::

      mamba create --name myenvname generax

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/generax:<tag>

   (see `generax/tags`_ for valid values for ``<tag>``)


.. |downloads_generax| image:: https://img.shields.io/conda/dn/bioconda/generax.svg?style=flat
   :target: https://anaconda.org/bioconda/generax
   :alt:   (downloads)
.. |docker_generax| image:: https://quay.io/repository/biocontainers/generax/status
   :target: https://quay.io/repository/biocontainers/generax
.. _`generax/tags`: https://quay.io/repository/biocontainers/generax?tab=tags


.. raw:: html

    <script>
        var package = "generax";
        var versions = ["2.1.3","2.1.3","2.0.4","2.0.4","2.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/generax/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/generax/README.html
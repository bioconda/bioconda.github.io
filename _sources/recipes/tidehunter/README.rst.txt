:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tidehunter'
.. highlight: bash

tidehunter
==========

.. conda:recipe:: tidehunter
   :replaces_section_title:
   :noindex:

   TideHunter\: efficient and sensitive tandem repeat detection from noisy long reads using seed\-and\-chain

   :homepage: https://github.com/yangao07/TideHunter
   :license: MIT / MIT
   :recipe: /`tidehunter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tidehunter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tidehunter/meta.yaml>`_

   


.. conda:package:: tidehunter

   |downloads_tidehunter| |docker_tidehunter|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.5.5-2</code>,  <code>1.5.5-0</code>,  <code>1.5.4-2</code>,  <code>1.5.4-1</code>,  <code>1.5.4-0</code>,  <code>1.5.3-1</code>,  <code>1.5.3-0</code>,  <code>1.5.2-0</code>,  <code>1.5.1-0</code>,  </span></summary>
      

      ``1.5.5-2``,  ``1.5.5-0``,  ``1.5.4-2``,  ``1.5.4-1``,  ``1.5.4-0``,  ``1.5.3-1``,  ``1.5.3-0``,  ``1.5.2-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.3-1``,  ``1.4.3-0``,  ``1.4.2-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.0-0``,  ``1.2.2-1``,  ``1.2.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
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

      mamba install tidehunter

   and update with::

      mamba update tidehunter

  To create a new environment, run::

      mamba create --name myenvname tidehunter

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tidehunter:<tag>

   (see `tidehunter/tags`_ for valid values for ``<tag>``)


.. |downloads_tidehunter| image:: https://img.shields.io/conda/dn/bioconda/tidehunter.svg?style=flat
   :target: https://anaconda.org/bioconda/tidehunter
   :alt:   (downloads)
.. |docker_tidehunter| image:: https://quay.io/repository/biocontainers/tidehunter/status
   :target: https://quay.io/repository/biocontainers/tidehunter
.. _`tidehunter/tags`: https://quay.io/repository/biocontainers/tidehunter?tab=tags


.. raw:: html

    <script>
        var package = "tidehunter";
        var versions = ["1.5.5","1.5.5","1.5.4","1.5.4","1.5.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tidehunter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tidehunter/README.html
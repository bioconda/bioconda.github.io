:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'howdesbt'
.. highlight: bash

howdesbt
========

.. conda:recipe:: howdesbt
   :replaces_section_title:
   :noindex:

   Sequence Bloom Tree\, supporting determined\/how split filters

   :homepage: https://github.com/medvedevgroup/HowDeSBT
   :license: MIT / MIT
   :recipe: /`howdesbt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/howdesbt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/howdesbt/meta.yaml>`_

   


.. conda:package:: howdesbt

   |downloads_howdesbt| |docker_howdesbt|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.00.15-1</code>,  <code>2.00.15-0</code>,  <code>2.00.13-1</code>,  <code>2.00.13-0</code>,  <code>2.00.10-1</code>,  <code>2.00.10-0</code>,  <code>2.00.07-0</code>,  <code>2.00.02-2</code>,  <code>2.00.02-1</code>,  </span></summary>
      

      ``2.00.15-1``,  ``2.00.15-0``,  ``2.00.13-1``,  ``2.00.13-0``,  ``2.00.10-1``,  ``2.00.10-0``,  ``2.00.07-0``,  ``2.00.02-2``,  ``2.00.02-1``,  ``2.00.02-0``,  ``1.00.03-1``,  ``1.00.03-0``,  ``1.00.00-0``

      
      .. raw:: html

         </details>
      

   
   :depends croaring: ``>=0.2.66,<0.2.67.0a0``
   :depends kmer-jellyfish: ``>=2.2``
   :depends kmer-jellyfish: ``>=2.3.1,<3.0a0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends sdsl-lite: 
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

      mamba install howdesbt

   and update with::

      mamba update howdesbt

  To create a new environment, run::

      mamba create --name myenvname howdesbt

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/howdesbt:<tag>

   (see `howdesbt/tags`_ for valid values for ``<tag>``)


.. |downloads_howdesbt| image:: https://img.shields.io/conda/dn/bioconda/howdesbt.svg?style=flat
   :target: https://anaconda.org/bioconda/howdesbt
   :alt:   (downloads)
.. |docker_howdesbt| image:: https://quay.io/repository/biocontainers/howdesbt/status
   :target: https://quay.io/repository/biocontainers/howdesbt
.. _`howdesbt/tags`: https://quay.io/repository/biocontainers/howdesbt?tab=tags


.. raw:: html

    <script>
        var package = "howdesbt";
        var versions = ["2.00.15","2.00.15","2.00.13","2.00.13","2.00.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/howdesbt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/howdesbt/README.html
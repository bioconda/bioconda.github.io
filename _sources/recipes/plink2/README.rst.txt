:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'plink2'
.. highlight: bash

plink2
======

.. conda:recipe:: plink2
   :replaces_section_title:
   :noindex:

   Whole genome association analysis toolset

   :homepage: https://www.cog-genomics.org/plink2
   :license: GPL-3
   :recipe: /`plink2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plink2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plink2/meta.yaml>`_

   Whole genome association analysis toolset\, designed to perform a range of basic\, large\-scale analyses in a computationally efficient manner.


.. conda:package:: plink2

   |downloads_plink2| |docker_plink2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.0a.6.9-0</code>,  <code>2.00a5.12-1</code>,  <code>2.00a5.12-0</code>,  <code>2.00a5.10-0</code>,  <code>2.00a5-0</code>,  <code>2.00a3.7-4</code>,  <code>2.00a3.7-3</code>,  <code>2.00a3.7-2</code>,  <code>2.00a3.7-1</code>,  </span></summary>
      

      ``2.0.0a.6.9-0``,  ``2.00a5.12-1``,  ``2.00a5.12-0``,  ``2.00a5.10-0``,  ``2.00a5-0``,  ``2.00a3.7-4``,  ``2.00a3.7-3``,  ``2.00a3.7-2``,  ``2.00a3.7-1``,  ``2.00a3.7-0``,  ``2.00a3.3-0``,  ``2.00a2.3-2``,  ``2.00a2.3-1``,  ``2.00a2.3-0``,  ``1.90b3.35-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
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

      mamba install plink2

   and update with::

      mamba update plink2

  To create a new environment, run::

      mamba create --name myenvname plink2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/plink2:<tag>

   (see `plink2/tags`_ for valid values for ``<tag>``)


.. |downloads_plink2| image:: https://img.shields.io/conda/dn/bioconda/plink2.svg?style=flat
   :target: https://anaconda.org/bioconda/plink2
   :alt:   (downloads)
.. |docker_plink2| image:: https://quay.io/repository/biocontainers/plink2/status
   :target: https://quay.io/repository/biocontainers/plink2
.. _`plink2/tags`: https://quay.io/repository/biocontainers/plink2?tab=tags


.. raw:: html

    <script>
        var package = "plink2";
        var versions = ["2.0.0a.6.9","2.00a5.12","2.00a5.12","2.00a5.10","2.00a5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/plink2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/plink2/README.html
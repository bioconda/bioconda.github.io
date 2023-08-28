:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'decifer'
.. highlight: bash

decifer
=======

.. conda:recipe:: decifer
   :replaces_section_title:
   :noindex:

   DeCiFer simultaneously selects mutation multiplicities and clusters SNVs by their corresponding descendant cell fractions \(DCF\)

   :homepage: https://github.com/raphael-group/decifer
   :license: BSD-3
   :recipe: /`decifer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/decifer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/decifer/meta.yaml>`_

   DeCiFer is an algorithm that simultaneously selects mutation multiplicities and clusters SNVs by their corresponding descendant cell fractions \(DCF\)\, a statistic that quantifies the proportion of cells which acquired the SNV or whose ancestors acquired the SNV. DCF is related to the commonly used cancer cell fraction \(CCF\) but further accounts for SNVs which are lost due to deleterious somatic copy\-number aberrations \(CNAs\)\, identifying clusters of SNVs which occur in the same phylogenetic branch of tumour evolution.


.. conda:package:: decifer

   |downloads_decifer| |docker_decifer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.1.4-0</code>,  <code>2.1.3-0</code>,  <code>2.1.2-1</code>,  <code>2.1.2-0</code>,  <code>2.1.1-0</code>,  <code>2.1.0-0</code>,  <code>2.0.5-1</code>,  <code>2.0.5-0</code>,  <code>2.0.4-0</code>,  </span></summary>
      

      ``2.1.4-0``,  ``2.1.3-0``,  ``2.1.2-1``,  ``2.1.2-0``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.5-1``,  ``2.0.5-0``,  ``2.0.4-0``,  ``2.0.3-0``,  ``2.0.2-0``,  ``2.0.1-0``,  ``1.1.5-0``,  ``1.1.4-0``,  ``1.1-0``,  ``1.0.0-0``,  ``0.0.2-1``,  ``0.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends lemon: ``>=1.3.1,<1.3.2.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends numpy: ``>=1.16.1``
   :depends pandas: 
   :depends python: ``>=3.11,<3.12.0a0``
   :depends python_abi: ``3.11.* *_cp311``
   :depends scipy: ``>=1.2.1``
   :depends seaborn: ``>=0.7.1``
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

      mamba install decifer

   and update with::

      mamba update decifer

  To create a new environment, run::

      mamba create --name myenvname decifer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/decifer:<tag>

   (see `decifer/tags`_ for valid values for ``<tag>``)


.. |downloads_decifer| image:: https://img.shields.io/conda/dn/bioconda/decifer.svg?style=flat
   :target: https://anaconda.org/bioconda/decifer
   :alt:   (downloads)
.. |docker_decifer| image:: https://quay.io/repository/biocontainers/decifer/status
   :target: https://quay.io/repository/biocontainers/decifer
.. _`decifer/tags`: https://quay.io/repository/biocontainers/decifer?tab=tags


.. raw:: html

    <script>
        var package = "decifer";
        var versions = ["2.1.4","2.1.3","2.1.2","2.1.2","2.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/decifer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/decifer/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'guidescan'
.. highlight: bash

guidescan
=========

.. conda:recipe:: guidescan
   :replaces_section_title:
   :noindex:

   GuideScan is a tool for genome\-wide CRISPR guide RNA \(gRNA\) design and analysis in custom genomes.

   :homepage: https://github.com/pritykinlab/guidescan-cli
   :license: Unknown
   :recipe: /`guidescan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/guidescan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/guidescan/meta.yaml>`_

   


.. conda:package:: guidescan

   |downloads_guidescan| |docker_guidescan|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.2.1-2</code>,  <code>2.2.1-1</code>,  <code>2.2.1-0</code>,  <code>2.2.0-0</code>,  <code>2.1.8-0</code>,  <code>2.1.7-0</code>,  <code>2.1.5-0</code>,  <code>2.1.4-2</code>,  <code>2.1.4-1</code>,  </span></summary>
      

      ``2.2.1-2``,  ``2.2.1-1``,  ``2.2.1-0``,  ``2.2.0-0``,  ``2.1.8-0``,  ``2.1.7-0``,  ``2.1.5-0``,  ``2.1.4-2``,  ``2.1.4-1``,  ``2.1.4-0``,  ``2.1.3-0``,  ``2.1.2-0``,  ``2.0.0-0``,  ``1.2-1``,  ``1.2-0``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libcurl: 
   :depends libgcc: ``>=12``
   :depends libstdcxx: ``>=12``
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

      mamba install guidescan

   and update with::

      mamba update guidescan

  To create a new environment, run::

      mamba create --name myenvname guidescan

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/guidescan:<tag>

   (see `guidescan/tags`_ for valid values for ``<tag>``)


.. |downloads_guidescan| image:: https://img.shields.io/conda/dn/bioconda/guidescan.svg?style=flat
   :target: https://anaconda.org/bioconda/guidescan
   :alt:   (downloads)
.. |docker_guidescan| image:: https://quay.io/repository/biocontainers/guidescan/status
   :target: https://quay.io/repository/biocontainers/guidescan
.. _`guidescan/tags`: https://quay.io/repository/biocontainers/guidescan?tab=tags


.. raw:: html

    <script>
        var package = "guidescan";
        var versions = ["2.2.1","2.2.1","2.2.1","2.2.0","2.1.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/guidescan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/guidescan/README.html
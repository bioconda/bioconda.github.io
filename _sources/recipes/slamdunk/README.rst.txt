:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'slamdunk'
.. highlight: bash

slamdunk
========

.. conda:recipe:: slamdunk
   :replaces_section_title:
   :noindex:

   Slamdunk is a software tool for SLAMseq data analysis.

   :homepage: http://t-neumann.github.io/slamdunk
   :documentation: http://t-neumann.github.io/slamdunk/docs.html
   
   :developer docs: https://github.com/t-neumann/slamdunk
   :license: AGPL / GNU Affero General Public License v3 (AGPLv3)
   :recipe: /`slamdunk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/slamdunk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/slamdunk/meta.yaml>`_
   :links: doi: :doi:`10.1186/s12859-019-2849-7`

   \<img src\=\"http\:\/\/t\-neumann.github.io\/slamdunk\/images\/slamdunk\_logo\_light.png\" width\=\"300\" title\=\"Slamdunk\"\>

   \#\#\# Streamlining SLAM\-Seq analysis with ultra\-high sensitivity.

   \[\!\[GitHub release\]\(https\:\/\/img.shields.io\/github\/release\/t\-neumann\/slamdunk.svg\)\]\(https\:\/\/github.com\/t\-neumann\/slamdunk\/releases\/latest\)
   \[\!\[Travis CI\]\(https\:\/\/img.shields.io\/travis\/t\-neumann\/slamdunk.svg\)\]\(https\:\/\/travis\-ci.org\/t\-neumann\/slamdunk\)

   \[\!\[Docker Pulls\]\(https\:\/\/img.shields.io\/docker\/pulls\/tobneu\/slamdunk.svg\)\]\(https\:\/\/hub.docker.com\/r\/tobneu\/slamdunk\)
   \[\!\[Docker Automated build\]\(https\:\/\/img.shields.io\/docker\/automated\/tobneu\/slamdunk.svg\)\]\(https\:\/\/hub.docker.com\/r\/tobneu\/slamdunk\/builds\/\)

   \[\!\[install with bioconda\]\(https\:\/\/img.shields.io\/badge\/install\%20with\-bioconda\-brightgreen.svg\?style\=flat\-square\)\]\(http\:\/\/bioconda.github.io\/recipes\/slamdunk\/README.html\)
   \[\!\[Anaconda build\]\(https\:\/\/anaconda.org\/bioconda\/slamdunk\/badges\/version.svg
   \)\]\(https\:\/\/anaconda.org\/bioconda\/slamdunk\)
   \[\!\[Anaconda downloads\]\(https\:\/\/anaconda.org\/bioconda\/slamdunk\/badges\/downloads.svg
   \)\]\(https\:\/\/anaconda.org\/bioconda\/slamdunk\)

   \[\!\[PyPI release\]\(https\:\/\/img.shields.io\/pypi\/v\/slamdunk.svg\)\]\(https\:\/\/pypi.python.org\/pypi\/slamdunk\)
   \!\[Github Stars\]\(https\:\/\/img.shields.io\/github\/stars\/t\-neumann\/slamdunk.svg\?style\=social\&label\=Star\)

   \-\-\-\-\-

   \#\#\# Slamdunk documentation

   http\:\/\/t\-neumann.github.io\/slamdunk

   \#\#\# Please cite

   Neumann\, T.\, Herzog\, V. A.\, Muhar\, M.\, Haeseler\, von\, A.\, Zuber\, J.\, Ameres\, S. L.\, \& Rescheneder\, P. \(2019\). \[Quantification of experimentally induced nucleotide conversions in high\-throughput sequencing datasets\]\(https\:\/\/bmcbioinformatics.biomedcentral.com\/articles\/10.1186\/s12859\-019\-2849\-7\). BMC Bioinformatics\, 20\(1\)\, 258. http\:\/\/doi.org\/10.1186\/s12859\-019\-2849\-7


.. conda:package:: slamdunk

   |downloads_slamdunk| |docker_slamdunk|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.4.3-0</code>,  <code>0.4.2-1</code>,  <code>0.4.2-0</code>,  <code>0.4.1-0</code>,  <code>0.4.0-1</code>,  <code>0.4.0-0</code>,  <code>0.3.4-1</code>,  <code>0.3.4-0</code>,  <code>0.3.3-0</code>,  </span></summary>
      

      ``0.4.3-0``,  ``0.4.2-1``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-1``,  ``0.4.0-0``,  ``0.3.4-1``,  ``0.3.4-0``,  ``0.3.3-0``,  ``0.3.2-1``,  ``0.3.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: ``>=1.74``
   :depends intervaltree: ``>=3.0.2``
   :depends joblib: ``>=0.14.0``
   :depends nextgenmap: ``0.5.5.*``
   :depends pandas: ``>=0.25.3``
   :depends pybedtools: ``>=0.8.0``
   :depends python: ``>=3``
   :depends r-getopt: 
   :depends r-gridextra: 
   :depends r-matrixstats: ``>=0.55.0``
   :depends r-tidyverse: ``>=1.3.0``
   :depends samtools: ``>=1.9``
   :depends varscan: ``2.4.4.*``
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

      mamba install slamdunk

   and update with::

      mamba update slamdunk

  To create a new environment, run::

      mamba create --name myenvname slamdunk

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/slamdunk:<tag>

   (see `slamdunk/tags`_ for valid values for ``<tag>``)


.. |downloads_slamdunk| image:: https://img.shields.io/conda/dn/bioconda/slamdunk.svg?style=flat
   :target: https://anaconda.org/bioconda/slamdunk
   :alt:   (downloads)
.. |docker_slamdunk| image:: https://quay.io/repository/biocontainers/slamdunk/status
   :target: https://quay.io/repository/biocontainers/slamdunk
.. _`slamdunk/tags`: https://quay.io/repository/biocontainers/slamdunk?tab=tags


.. raw:: html

    <script>
        var package = "slamdunk";
        var versions = ["0.4.3","0.4.2","0.4.2","0.4.1","0.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/slamdunk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/slamdunk/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'methylartist'
.. highlight: bash

methylartist
============

.. conda:recipe:: methylartist
   :replaces_section_title:
   :noindex:

   Tools for parsing and plotting nanopore methylation data

   :homepage: https://github.com/adamewing/methylartist
   :license: MIT / MIT
   :recipe: /`methylartist <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/methylartist>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/methylartist/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btac292`

   


.. conda:package:: methylartist

   |downloads_methylartist| |docker_methylartist|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.1-0</code>,  <code>1.3.0-0</code>,  <code>1.2.11-0</code>,  <code>1.2.7-0</code>,  <code>1.2.3-0</code>,  <code>1.2.2-0</code>,  <code>1.2.1-0</code>,  <code>1.2.0-0</code>,  <code>1.1.2-0</code>,  </span></summary>
      

      ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.11-0``,  ``1.2.7-0``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends bx-python: ``>=0.8.11``
   :depends matplotlib-base: ``>=3.4.3``
   :depends numpy: ``>=1.21``
   :depends ont-fast5-api: ``>=4.0.0``
   :depends pandas: ``>=1.3.2``
   :depends pysam: ``>=0.16``
   :depends python: ``>=3.7``
   :depends scikit-bio: ``>=0.5.6``
   :depends scipy: ``>=1.7.1``
   :depends seaborn: ``>=0.11.2``
   :depends tqdm: 
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

      mamba install methylartist

   and update with::

      mamba update methylartist

  To create a new environment, run::

      mamba create --name myenvname methylartist

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/methylartist:<tag>

   (see `methylartist/tags`_ for valid values for ``<tag>``)


.. |downloads_methylartist| image:: https://img.shields.io/conda/dn/bioconda/methylartist.svg?style=flat
   :target: https://anaconda.org/bioconda/methylartist
   :alt:   (downloads)
.. |docker_methylartist| image:: https://quay.io/repository/biocontainers/methylartist/status
   :target: https://quay.io/repository/biocontainers/methylartist
.. _`methylartist/tags`: https://quay.io/repository/biocontainers/methylartist?tab=tags


.. raw:: html

    <script>
        var package = "methylartist";
        var versions = ["1.3.1","1.3.0","1.2.11","1.2.7","1.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/methylartist/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/methylartist/README.html
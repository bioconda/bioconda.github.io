:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'maxbin2'
.. highlight: bash

maxbin2
=======

.. conda:recipe:: maxbin2
   :replaces_section_title:
   :noindex:

   MaxBin is software for binning assembled metagenomic sequences based on an Expectation\-Maximization algorithm.

   :homepage: https://sourceforge.net/projects/maxbin
   :license: BSD / BSD-3-Clause
   :recipe: /`maxbin2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/maxbin2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/maxbin2/meta.yaml>`_
   :links: doi: :doi:`10.1186/2049-2618-2-26`, doi: :doi:`10.1093/bioinformatics/btv638`

   


.. conda:package:: maxbin2

   |downloads_maxbin2| |docker_maxbin2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.2.7-8</code>,  <code>2.2.7-7</code>,  <code>2.2.7-6</code>,  <code>2.2.7-5</code>,  <code>2.2.7-4</code>,  <code>2.2.7-3</code>,  <code>2.2.7-2</code>,  <code>2.2.7-1</code>,  <code>2.2.7-0</code>,  </span></summary>
      

      ``2.2.7-8``,  ``2.2.7-7``,  ``2.2.7-6``,  ``2.2.7-5``,  ``2.2.7-4``,  ``2.2.7-3``,  ``2.2.7-2``,  ``2.2.7-1``,  ``2.2.7-0``,  ``2.2.6-0``,  ``2.2.4-1``,  ``2.2.4-0``,  ``2.2.1-1``,  ``2.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bowtie2: 
   :depends fraggenescan: ``>=1.30``
   :depends hmmer: 
   :depends idba: 
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends perl: 
   :depends perl-libwww-perl: 
   :depends r-base: 
   :depends r-gplots: 
   :depends tar: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install maxbin2

   and update with::

      mamba update maxbin2

  To create a new environment, run::

      mamba create --name myenvname maxbin2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/maxbin2:<tag>

   (see `maxbin2/tags`_ for valid values for ``<tag>``)


.. |downloads_maxbin2| image:: https://img.shields.io/conda/dn/bioconda/maxbin2.svg?style=flat
   :target: https://anaconda.org/bioconda/maxbin2
   :alt:   (downloads)
.. |docker_maxbin2| image:: https://quay.io/repository/biocontainers/maxbin2/status
   :target: https://quay.io/repository/biocontainers/maxbin2
.. _`maxbin2/tags`: https://quay.io/repository/biocontainers/maxbin2?tab=tags


.. raw:: html

    <script>
        var package = "maxbin2";
        var versions = ["2.2.7","2.2.7","2.2.7","2.2.7","2.2.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/maxbin2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/maxbin2/README.html
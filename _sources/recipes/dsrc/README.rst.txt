:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dsrc'
.. highlight: bash

dsrc
====

.. conda:recipe:: dsrc
   :replaces_section_title:
   :noindex:

   high\-performance compression of sequencing reads stored in FASTQ format

   :homepage: https://github.com/refresh-bio/DSRC
   :license: GNU GPL 2
   :recipe: /`dsrc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dsrc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dsrc/meta.yaml>`_
   :links: biotools: :biotools:`dsrc`

   


.. conda:package:: dsrc

   |downloads_dsrc| |docker_dsrc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2015.06.04-9</code>,  <code>2015.06.04-8</code>,  <code>2015.06.04-7</code>,  <code>2015.06.04-6</code>,  <code>2015.06.04-5</code>,  <code>2015.06.04-4</code>,  <code>2015.06.04-3</code>,  <code>2015.06.04-2</code>,  <code>2015.06.04-1</code>,  </span></summary>
      

      ``2015.06.04-9``,  ``2015.06.04-8``,  ``2015.06.04-7``,  ``2015.06.04-6``,  ``2015.06.04-5``,  ``2015.06.04-4``,  ``2015.06.04-3``,  ``2015.06.04-2``,  ``2015.06.04-1``,  ``2015.06.04-0``,  ``2014.12.17-2``,  ``2014.12.17-1``

      
      .. raw:: html

         </details>
      

   
   :depends boost-cpp: 
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends zlib: 
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

      mamba install dsrc

   and update with::

      mamba update dsrc

  To create a new environment, run::

      mamba create --name myenvname dsrc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dsrc:<tag>

   (see `dsrc/tags`_ for valid values for ``<tag>``)


.. |downloads_dsrc| image:: https://img.shields.io/conda/dn/bioconda/dsrc.svg?style=flat
   :target: https://anaconda.org/bioconda/dsrc
   :alt:   (downloads)
.. |docker_dsrc| image:: https://quay.io/repository/biocontainers/dsrc/status
   :target: https://quay.io/repository/biocontainers/dsrc
.. _`dsrc/tags`: https://quay.io/repository/biocontainers/dsrc?tab=tags


.. raw:: html

    <script>
        var package = "dsrc";
        var versions = ["2015.06.04","2015.06.04","2015.06.04","2015.06.04","2015.06.04"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dsrc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dsrc/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'htstream'
.. highlight: bash

htstream
========

.. conda:recipe:: htstream
   :replaces_section_title:
   :noindex:

   HTStream is a quality control and processing pipeline for High Throughput Sequencing data.
   The difference between HTStream and other tools is that HTStream uses a tab delimited fastq format that allows for streaming from application to application.
   This streaming creates some awesome efficiencies when processing HTS data and makes it fully interoperable with other standard Linux tools. 

   :homepage: https://s4hts.github.io/HTStream/
   :license: Apache / Apache 2.0
   :recipe: /`htstream <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/htstream>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/htstream/meta.yaml>`_

   


.. conda:package:: htstream

   |downloads_htstream| |docker_htstream|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.1-0</code>,  <code>1.3.3-6</code>,  <code>1.3.3-5</code>,  <code>1.3.3-4</code>,  <code>1.3.3-3</code>,  <code>1.3.3-2</code>,  <code>1.3.3-1</code>,  <code>1.3.3-0</code>,  <code>1.3.2-0</code>,  </span></summary>
      

      ``1.4.1-0``,  ``1.3.3-6``,  ``1.3.3-5``,  ``1.3.3-4``,  ``1.3.3-3``,  ``1.3.3-2``,  ``1.3.3-1``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends boost: 
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc: ``>=13``
   :depends liblzma: ``>=5.6.3,<6.0a0``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends xz: 
   :depends zlib: 
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

      mamba install htstream

   and update with::

      mamba update htstream

  To create a new environment, run::

      mamba create --name myenvname htstream

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/htstream:<tag>

   (see `htstream/tags`_ for valid values for ``<tag>``)


.. |downloads_htstream| image:: https://img.shields.io/conda/dn/bioconda/htstream.svg?style=flat
   :target: https://anaconda.org/bioconda/htstream
   :alt:   (downloads)
.. |docker_htstream| image:: https://quay.io/repository/biocontainers/htstream/status
   :target: https://quay.io/repository/biocontainers/htstream
.. _`htstream/tags`: https://quay.io/repository/biocontainers/htstream?tab=tags


.. raw:: html

    <script>
        var package = "htstream";
        var versions = ["1.4.1","1.3.3","1.3.3","1.3.3","1.3.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/htstream/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/htstream/README.html
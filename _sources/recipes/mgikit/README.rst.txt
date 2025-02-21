:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mgikit'
.. highlight: bash

mgikit
======

.. conda:recipe:: mgikit
   :replaces_section_title:
   :noindex:

   mgikit is a collection of tools used to demultiplex fastq files and generate demultiplexing and quality reports. 


   :homepage: https://sagc-bioinformatics.github.io/mgikit/
   :developer docs: https://github.com/sagc-bioinformatics/mgikit
   :license: AFL-3.0
   :recipe: /`mgikit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mgikit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mgikit/meta.yaml>`_

   


.. conda:package:: mgikit

   |downloads_mgikit| |docker_mgikit|

   :versions:
      
      

      ``1.0.0-0``,  ``0.1.7-1``,  ``0.1.7-0``,  ``0.1.6-0``,  ``0.1.5-1``,  ``0.1.5-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
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

      mamba install mgikit

   and update with::

      mamba update mgikit

  To create a new environment, run::

      mamba create --name myenvname mgikit

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mgikit:<tag>

   (see `mgikit/tags`_ for valid values for ``<tag>``)


.. |downloads_mgikit| image:: https://img.shields.io/conda/dn/bioconda/mgikit.svg?style=flat
   :target: https://anaconda.org/bioconda/mgikit
   :alt:   (downloads)
.. |docker_mgikit| image:: https://quay.io/repository/biocontainers/mgikit/status
   :target: https://quay.io/repository/biocontainers/mgikit
.. _`mgikit/tags`: https://quay.io/repository/biocontainers/mgikit?tab=tags


.. raw:: html

    <script>
        var package = "mgikit";
        var versions = ["1.0.0","0.1.7","0.1.7","0.1.6","0.1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mgikit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mgikit/README.html
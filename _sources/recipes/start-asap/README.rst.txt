:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'start-asap'
.. highlight: bash

start-asap
==========

.. conda:recipe:: start-asap
   :replaces_section_title:
   :noindex:

   Prepare project directory and project sheet for ASA3P

   :homepage: http://github.com/quadram-institute-bioscience/start-asap/
   :license: MIT
   :recipe: /`start-asap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/start-asap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/start-asap/meta.yaml>`_
   :links: biotools: :biotools:`start-asap`

   Prepare the input directory for \'ASA3P\'\, creating automatically a \_config.xls\_ file from the reads provided.
   Requires one or more reference files \(.gbk recommended\) and a directory with FASTQ files \(.fq or .fastq\, gzipped\).
   Metadata can be supplied via command line or with a JSON file.



.. conda:package:: start-asap

   |downloads_start-asap| |docker_start-asap|

   :versions:
      
      

      ``1.3.0-1``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends perl: 
   :depends perl-getopt-long: 
   :depends perl-json-pp: 
   :depends perl-pod-usage: 
   :depends perl-spreadsheet-writeexcel: 
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

      mamba install start-asap

   and update with::

      mamba update start-asap

  To create a new environment, run::

      mamba create --name myenvname start-asap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/start-asap:<tag>

   (see `start-asap/tags`_ for valid values for ``<tag>``)


.. |downloads_start-asap| image:: https://img.shields.io/conda/dn/bioconda/start-asap.svg?style=flat
   :target: https://anaconda.org/bioconda/start-asap
   :alt:   (downloads)
.. |docker_start-asap| image:: https://quay.io/repository/biocontainers/start-asap/status
   :target: https://quay.io/repository/biocontainers/start-asap
.. _`start-asap/tags`: https://quay.io/repository/biocontainers/start-asap?tab=tags


.. raw:: html

    <script>
        var package = "start-asap";
        var versions = ["1.3.0","1.3.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/start-asap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/start-asap/README.html
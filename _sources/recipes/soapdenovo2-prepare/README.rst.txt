:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'soapdenovo2-prepare'
.. highlight: bash

soapdenovo2-prepare
===================

.. conda:recipe:: soapdenovo2-prepare
   :replaces_section_title:
   :noindex:

   SoapDenovo2 data prepare module using assembled contig to do scaffold assembly.

   :homepage: https://github.com/aquaskyline/SOAPdenovo2
   :license: GPL / GPL-3.0
   :recipe: /`soapdenovo2-prepare <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/soapdenovo2-prepare>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/soapdenovo2-prepare/meta.yaml>`_

   


.. conda:package:: soapdenovo2-prepare

   |downloads_soapdenovo2-prepare| |docker_soapdenovo2-prepare|

   :versions:
      
      

      ``2.0-8``,  ``2.0-7``,  ``2.0-6``,  ``2.0-5``,  ``2.0-4``,  ``2.0-3``,  ``2.0-1``,  ``2.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
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

      mamba install soapdenovo2-prepare

   and update with::

      mamba update soapdenovo2-prepare

  To create a new environment, run::

      mamba create --name myenvname soapdenovo2-prepare

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/soapdenovo2-prepare:<tag>

   (see `soapdenovo2-prepare/tags`_ for valid values for ``<tag>``)


.. |downloads_soapdenovo2-prepare| image:: https://img.shields.io/conda/dn/bioconda/soapdenovo2-prepare.svg?style=flat
   :target: https://anaconda.org/bioconda/soapdenovo2-prepare
   :alt:   (downloads)
.. |docker_soapdenovo2-prepare| image:: https://quay.io/repository/biocontainers/soapdenovo2-prepare/status
   :target: https://quay.io/repository/biocontainers/soapdenovo2-prepare
.. _`soapdenovo2-prepare/tags`: https://quay.io/repository/biocontainers/soapdenovo2-prepare?tab=tags


.. raw:: html

    <script>
        var package = "soapdenovo2-prepare";
        var versions = ["2.0","2.0","2.0","2.0","2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/soapdenovo2-prepare/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/soapdenovo2-prepare/README.html
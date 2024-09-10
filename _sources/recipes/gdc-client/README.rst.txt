:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gdc-client'
.. highlight: bash

gdc-client
==========

.. conda:recipe:: gdc-client
   :replaces_section_title:
   :noindex:

   GDC Data Transfer Tool

   :homepage: https://gdc.cancer.gov/access-data/gdc-data-transfer-tool
   :documentation: https://docs.gdc.cancer.gov/Data_Transfer_Tool/Users_Guide/Getting_Started
   
   :developer docs: https://github.com/NCI-GDC/gdc-client
   :license: APACHE / Apache-2.0
   :recipe: /`gdc-client <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gdc-client>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gdc-client/meta.yaml>`_

   


.. conda:package:: gdc-client

   |downloads_gdc-client| |docker_gdc-client|

   :versions:
      
      

      ``2.1-0``,  ``2.0-0``,  ``1.6.1-0``,  ``1.6.0-0``,  ``1.5.0-0``,  ``1.4.0-0``,  ``1.3.0-3``,  ``1.3.0-1``,  ``1.3.0-0``

      

   
   :depends cryptography: ``>=2.8``
   :depends importlib-metadata: 
   :depends intervaltree: ``>=3.0.2``
   :depends jsonschema: ``>=2.6``
   :depends lxml: ``>=4.4.2``
   :depends ndg-httpsclient: ``>=0.5.0,<1``
   :depends progressbar2: ``>=3.43.1``
   :depends pyasn1: ``>=0.4.3,<1``
   :depends pyopenssl: ``>=18,<19``
   :depends python: ``>=3.5``
   :depends pyyaml: ``>=5.1``
   :depends requests: ``>=2.22.0``
   :depends termcolor: ``>=1.1.0``
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

      mamba install gdc-client

   and update with::

      mamba update gdc-client

  To create a new environment, run::

      mamba create --name myenvname gdc-client

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gdc-client:<tag>

   (see `gdc-client/tags`_ for valid values for ``<tag>``)


.. |downloads_gdc-client| image:: https://img.shields.io/conda/dn/bioconda/gdc-client.svg?style=flat
   :target: https://anaconda.org/bioconda/gdc-client
   :alt:   (downloads)
.. |docker_gdc-client| image:: https://quay.io/repository/biocontainers/gdc-client/status
   :target: https://quay.io/repository/biocontainers/gdc-client
.. _`gdc-client/tags`: https://quay.io/repository/biocontainers/gdc-client?tab=tags


.. raw:: html

    <script>
        var package = "gdc-client";
        var versions = ["2.1","2.0","1.6.1","1.6.0","1.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gdc-client/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gdc-client/README.html
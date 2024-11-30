:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fiji-simple_omero_client'
.. highlight: bash

fiji-simple_omero_client
========================

.. conda:recipe:: fiji-simple_omero_client
   :replaces_section_title:
   :noindex:

   Java library to simplify API to put\/get objects on an OMERO server from Fiji\/ImageJ.

   :homepage: https://github.com/GReD-Clermont/simple-omero-client
   :license: GPLv2
   :recipe: /`fiji-simple_omero_client <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fiji-simple_omero_client>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fiji-simple_omero_client/meta.yaml>`_

   This library presents a simplified API to put\/get objects on an OMERO server.



.. conda:package:: fiji-simple_omero_client

   |downloads_fiji-simple_omero_client| |docker_fiji-simple_omero_client|

   :versions:
      
      

      ``5.19.0-0``,  ``5.18.0-0``,  ``5.17.0-0``,  ``5.16.0-0``,  ``5.15.0-0``,  ``5.12.2-0``

      

   
   :depends fiji: ``>=20220414``
   :depends fiji-omero_ij: ``<6.0.0``
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

      mamba install fiji-simple_omero_client

   and update with::

      mamba update fiji-simple_omero_client

  To create a new environment, run::

      mamba create --name myenvname fiji-simple_omero_client

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fiji-simple_omero_client:<tag>

   (see `fiji-simple_omero_client/tags`_ for valid values for ``<tag>``)


.. |downloads_fiji-simple_omero_client| image:: https://img.shields.io/conda/dn/bioconda/fiji-simple_omero_client.svg?style=flat
   :target: https://anaconda.org/bioconda/fiji-simple_omero_client
   :alt:   (downloads)
.. |docker_fiji-simple_omero_client| image:: https://quay.io/repository/biocontainers/fiji-simple_omero_client/status
   :target: https://quay.io/repository/biocontainers/fiji-simple_omero_client
.. _`fiji-simple_omero_client/tags`: https://quay.io/repository/biocontainers/fiji-simple_omero_client?tab=tags


.. raw:: html

    <script>
        var package = "fiji-simple_omero_client";
        var versions = ["5.19.0","5.18.0","5.17.0","5.16.0","5.15.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fiji-simple_omero_client/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fiji-simple_omero_client/README.html
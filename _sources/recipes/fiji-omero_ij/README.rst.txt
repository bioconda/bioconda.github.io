:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fiji-omero_ij'
.. highlight: bash

fiji-omero_ij
=============

.. conda:recipe:: fiji-omero_ij
   :replaces_section_title:
   :noindex:

   ImageJ \/ Fiji plugin to visualize and manipulate both image data and metadata maintained at an OMERO server site.

   :homepage: https://github.com/ome/omero-insight
   :license: GPLv2
   :recipe: /`fiji-omero_ij <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fiji-omero_ij>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fiji-omero_ij/meta.yaml>`_

   The OMERO.insight Project is a sub\-project of the Open Microscopy Environment Project\, OME that focuses on delivering a client for the visualization and manipulation of both image data and metadata maintained at an OMERO server site.



.. conda:package:: fiji-omero_ij

   |downloads_fiji-omero_ij| |docker_fiji-omero_ij|

   :versions:
      
      

      ``5.8.3-0``,  ``5.8.0-0``

      

   
   :depends fiji: ``>=20220414``
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

      mamba install fiji-omero_ij

   and update with::

      mamba update fiji-omero_ij

  To create a new environment, run::

      mamba create --name myenvname fiji-omero_ij

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fiji-omero_ij:<tag>

   (see `fiji-omero_ij/tags`_ for valid values for ``<tag>``)


.. |downloads_fiji-omero_ij| image:: https://img.shields.io/conda/dn/bioconda/fiji-omero_ij.svg?style=flat
   :target: https://anaconda.org/bioconda/fiji-omero_ij
   :alt:   (downloads)
.. |docker_fiji-omero_ij| image:: https://quay.io/repository/biocontainers/fiji-omero_ij/status
   :target: https://quay.io/repository/biocontainers/fiji-omero_ij
.. _`fiji-omero_ij/tags`: https://quay.io/repository/biocontainers/fiji-omero_ij?tab=tags


.. raw:: html

    <script>
        var package = "fiji-omero_ij";
        var versions = ["5.8.3","5.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fiji-omero_ij/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fiji-omero_ij/README.html
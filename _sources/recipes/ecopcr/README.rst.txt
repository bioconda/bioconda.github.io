:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ecopcr'
.. highlight: bash

ecopcr
======

.. conda:recipe:: ecopcr
   :replaces_section_title:
   :noindex:

   ecoPCR is an electronic PCR software that helps you estimate Barcode primers quality.

   :homepage: https://git.metabarcoding.org/obitools/ecopcr/wikis/home
   :license: CeCill v2
   :recipe: /`ecopcr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ecopcr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ecopcr/meta.yaml>`_

   


.. conda:package:: ecopcr

   |downloads_ecopcr| |docker_ecopcr|

   :versions:
      
      

      ``0.5.0-1``,  ``0.5.0-0``

      

   
   :depends libgcc: 
   :depends python: ``2.7*``
   :depends reportlab: 
   :depends zlib: ``1.2.11*``
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

      mamba install ecopcr

   and update with::

      mamba update ecopcr

  To create a new environment, run::

      mamba create --name myenvname ecopcr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ecopcr:<tag>

   (see `ecopcr/tags`_ for valid values for ``<tag>``)


.. |downloads_ecopcr| image:: https://img.shields.io/conda/dn/bioconda/ecopcr.svg?style=flat
   :target: https://anaconda.org/bioconda/ecopcr
   :alt:   (downloads)
.. |docker_ecopcr| image:: https://quay.io/repository/biocontainers/ecopcr/status
   :target: https://quay.io/repository/biocontainers/ecopcr
.. _`ecopcr/tags`: https://quay.io/repository/biocontainers/ecopcr?tab=tags


.. raw:: html

    <script>
        var package = "ecopcr";
        var versions = ["0.5.0","0.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ecopcr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ecopcr/README.html
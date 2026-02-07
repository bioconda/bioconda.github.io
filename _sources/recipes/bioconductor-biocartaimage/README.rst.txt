:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biocartaimage'
.. highlight: bash

bioconductor-biocartaimage
==========================

.. conda:recipe:: bioconductor-biocartaimage
   :replaces_section_title:
   :noindex:

   BioCarta Pathway Images

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/BioCartaImage.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-biocartaimage <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocartaimage>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocartaimage/meta.yaml>`_

   The core functionality of the package is to provide coordinates of genes on the BioCarta pathway images and to provide methods to add self\-defined graphics to the genes of interest.


.. conda:package:: bioconductor-biocartaimage

   |downloads_bioconductor-biocartaimage| |docker_bioconductor-biocartaimage|

   :versions:
      
      

      ``1.8.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends r-base: ``>=4.5,<4.6.0a0``
   :depends r-magick: 
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

      mamba install bioconductor-biocartaimage

   and update with::

      mamba update bioconductor-biocartaimage

  To create a new environment, run::

      mamba create --name myenvname bioconductor-biocartaimage

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biocartaimage:<tag>

   (see `bioconductor-biocartaimage/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biocartaimage| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biocartaimage.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biocartaimage
   :alt:   (downloads)
.. |docker_bioconductor-biocartaimage| image:: https://quay.io/repository/biocontainers/bioconductor-biocartaimage/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biocartaimage
.. _`bioconductor-biocartaimage/tags`: https://quay.io/repository/biocontainers/bioconductor-biocartaimage?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biocartaimage";
        var versions = ["1.8.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biocartaimage/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biocartaimage/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'esimsa'
.. highlight: bash

esimsa
======

.. conda:recipe:: esimsa
   :replaces_section_title:
   :noindex:

   Simple deconvolution of electrospray ionization peak lists

   :homepage: http://www.ms-utils.org/esimsa.html
   :license: GPL-2.0-or-later
   :recipe: /`esimsa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/esimsa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/esimsa/meta.yaml>`_
   :links: biotools: :biotools:`esimsa`, pmid: :pmid:`10861983`

   


.. conda:package:: esimsa

   |downloads_esimsa| |docker_esimsa|

   :versions:
      
      

      ``1.0-1``,  ``1.0-0``

      

   
   :depends libgcc-ng: ``>=4.9``
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

      mamba install esimsa

   and update with::

      mamba update esimsa

  To create a new environment, run::

      mamba create --name myenvname esimsa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/esimsa:<tag>

   (see `esimsa/tags`_ for valid values for ``<tag>``)


.. |downloads_esimsa| image:: https://img.shields.io/conda/dn/bioconda/esimsa.svg?style=flat
   :target: https://anaconda.org/bioconda/esimsa
   :alt:   (downloads)
.. |docker_esimsa| image:: https://quay.io/repository/biocontainers/esimsa/status
   :target: https://quay.io/repository/biocontainers/esimsa
.. _`esimsa/tags`: https://quay.io/repository/biocontainers/esimsa?tab=tags


.. raw:: html

    <script>
        var package = "esimsa";
        var versions = ["1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/esimsa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/esimsa/README.html
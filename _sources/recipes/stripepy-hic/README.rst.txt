:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'stripepy-hic'
.. highlight: bash

stripepy-hic
============

.. conda:recipe:: stripepy-hic
   :replaces_section_title:
   :noindex:

   StripePy recognizes architectural stripes in 3C and Hi\-C contact maps using geometric reasoning

   :homepage: https://github.com/paulsengroup/StripePy
   :documentation: https://stripepy.readthedocs.io/
   
   :license: MIT
   :recipe: /`stripepy-hic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stripepy-hic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stripepy-hic/meta.yaml>`_
   :links: biotools: :biotools:`stripepy-hic`, doi: :doi:`10.5281/zenodo.14394041`

   


.. conda:package:: stripepy-hic

   |downloads_stripepy-hic| |docker_stripepy-hic|

   :versions:
      
      

      ``1.2.0-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.0-0``,  ``0.0.2-0``

      

   
   :depends colorama: 
   :depends h5py: ``>=3``
   :depends hictkpy: ``>=1.2``
   :depends matplotlib-base: ``>=3.8``
   :depends numpy: ``>=2``
   :depends opentelemetry-api: ``>=1``
   :depends opentelemetry-exporter-otlp-proto-http: ``>=1``
   :depends opentelemetry-sdk: ``>=1``
   :depends packaging: 
   :depends pandas: ``>=2``
   :depends python: 
   :depends rich: ``>=13.9``
   :depends scipy: 
   :depends structlog: ``>=24``
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

      mamba install stripepy-hic

   and update with::

      mamba update stripepy-hic

  To create a new environment, run::

      mamba create --name myenvname stripepy-hic

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/stripepy-hic:<tag>

   (see `stripepy-hic/tags`_ for valid values for ``<tag>``)


.. |downloads_stripepy-hic| image:: https://img.shields.io/conda/dn/bioconda/stripepy-hic.svg?style=flat
   :target: https://anaconda.org/bioconda/stripepy-hic
   :alt:   (downloads)
.. |docker_stripepy-hic| image:: https://quay.io/repository/biocontainers/stripepy-hic/status
   :target: https://quay.io/repository/biocontainers/stripepy-hic
.. _`stripepy-hic/tags`: https://quay.io/repository/biocontainers/stripepy-hic?tab=tags


.. raw:: html

    <script>
        var package = "stripepy-hic";
        var versions = ["1.2.0","1.1.1","1.1.0","1.0.0","0.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/stripepy-hic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/stripepy-hic/README.html
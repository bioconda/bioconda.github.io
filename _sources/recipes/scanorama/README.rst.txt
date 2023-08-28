:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scanorama'
.. highlight: bash

scanorama
=========

.. conda:recipe:: scanorama
   :replaces_section_title:
   :noindex:

   Panoramic stitching of heterogeneous single\-cell transcriptomic data

   :homepage: https://github.com/brianhie/scanorama/
   :license: MIT
   :recipe: /`scanorama <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scanorama>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scanorama/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41587-019-0113-3`

   


.. conda:package:: scanorama

   |downloads_scanorama| |docker_scanorama|

   :versions:
      
      

      ``1.7.3-0``,  ``1.7.1-0``,  ``1.7-0``,  ``1.6-0``,  ``1.5.2-0``,  ``1.5.1-0``,  ``1.5-0``

      

   
   :depends fbpca: ``>=1.0``
   :depends geosketch: ``>=1``
   :depends intervaltree: ``>=3.1.0``
   :depends matplotlib-base: ``>=2.0.2``
   :depends numpy: ``>=1.12``
   :depends python: ``>=3.6``
   :depends python-annoy: ``>=1.11.5``
   :depends scikit-learn: 
   :depends scipy: ``>=1``
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

      mamba install scanorama

   and update with::

      mamba update scanorama

  To create a new environment, run::

      mamba create --name myenvname scanorama

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/scanorama:<tag>

   (see `scanorama/tags`_ for valid values for ``<tag>``)


.. |downloads_scanorama| image:: https://img.shields.io/conda/dn/bioconda/scanorama.svg?style=flat
   :target: https://anaconda.org/bioconda/scanorama
   :alt:   (downloads)
.. |docker_scanorama| image:: https://quay.io/repository/biocontainers/scanorama/status
   :target: https://quay.io/repository/biocontainers/scanorama
.. _`scanorama/tags`: https://quay.io/repository/biocontainers/scanorama?tab=tags


.. raw:: html

    <script>
        var package = "scanorama";
        var versions = ["1.7.3","1.7.1","1.7","1.6","1.5.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scanorama/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scanorama/README.html
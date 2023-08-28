:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mavis'
.. highlight: bash

mavis
=====

.. conda:recipe:: mavis
   :replaces_section_title:
   :noindex:

   A Structural Variant Post\-Processing Package

   :homepage: https://github.com/bcgsc/mavis.git
   :documentation: http://mavis.bcgsc.ca/docs/latest
   
   :license: OTHER / Non-commercial use only
   :recipe: /`mavis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mavis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mavis/meta.yaml>`_

   


.. conda:package:: mavis

   |downloads_mavis| |docker_mavis|

   :versions:
      
      

      ``2.2.6-0``

      

   
   :depends biopython: ``>=1.70``
   :depends braceexpand: ``0.1.2``
   :depends colour: 
   :depends distance: ``>=0.1.3``
   :depends networkx: ``1.11.0``
   :depends numpy: ``>=1.13.1``
   :depends pysam: ``>=0.9``
   :depends python: ``>=3``
   :depends pyvcf: ``0.6.8``
   :depends shapely: ``>=1.6.4``
   :depends shortuuid: ``>=0.5.0``
   :depends svgwrite: 
   :depends ucsc-blat: 
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

      mamba install mavis

   and update with::

      mamba update mavis

  To create a new environment, run::

      mamba create --name myenvname mavis

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mavis:<tag>

   (see `mavis/tags`_ for valid values for ``<tag>``)


.. |downloads_mavis| image:: https://img.shields.io/conda/dn/bioconda/mavis.svg?style=flat
   :target: https://anaconda.org/bioconda/mavis
   :alt:   (downloads)
.. |docker_mavis| image:: https://quay.io/repository/biocontainers/mavis/status
   :target: https://quay.io/repository/biocontainers/mavis
.. _`mavis/tags`: https://quay.io/repository/biocontainers/mavis?tab=tags


.. raw:: html

    <script>
        var package = "mavis";
        var versions = ["2.2.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mavis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mavis/README.html
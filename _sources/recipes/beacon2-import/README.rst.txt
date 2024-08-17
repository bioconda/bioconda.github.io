:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'beacon2-import'
.. highlight: bash

beacon2-import
==============

.. conda:recipe:: beacon2-import
   :replaces_section_title:
   :noindex:

   Seamlessly import and query genomic variant data from a beacon

   :homepage: https://pypi.org/project/beacon2-import/
   :license: CC-BY-NC-4.0
   :recipe: /`beacon2-import <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/beacon2-import>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/beacon2-import/meta.yaml>`_

   Effortlessly import genetic variants from targeted Galaxy histories or local repositories into your beacon instance with our utility. Simplify querying and analysis of genetic data\, enabling comprehensive genetic inquiries with ease


.. conda:package:: beacon2-import

   |downloads_beacon2-import| |docker_beacon2-import|

   :versions:
      
      

      ``2.2.3-0``,  ``2.2.2-0``,  ``2.2.1-0``,  ``2.1.0-0``,  ``2.0.0-0``,  ``1.0.8-0``,  ``1.0.7-0``,  ``1.0.6-0``

      

   
   :depends bioblend: ``0.10.0.*``
   :depends cyvcf2: 
   :depends dataclasses: 
   :depends jsonschema: 
   :depends pymongo: 
   :depends python: ``<3.12``
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

      mamba install beacon2-import

   and update with::

      mamba update beacon2-import

  To create a new environment, run::

      mamba create --name myenvname beacon2-import

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/beacon2-import:<tag>

   (see `beacon2-import/tags`_ for valid values for ``<tag>``)


.. |downloads_beacon2-import| image:: https://img.shields.io/conda/dn/bioconda/beacon2-import.svg?style=flat
   :target: https://anaconda.org/bioconda/beacon2-import
   :alt:   (downloads)
.. |docker_beacon2-import| image:: https://quay.io/repository/biocontainers/beacon2-import/status
   :target: https://quay.io/repository/biocontainers/beacon2-import
.. _`beacon2-import/tags`: https://quay.io/repository/biocontainers/beacon2-import?tab=tags


.. raw:: html

    <script>
        var package = "beacon2-import";
        var versions = ["2.2.3","2.2.2","2.2.1","2.1.0","2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/beacon2-import/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/beacon2-import/README.html
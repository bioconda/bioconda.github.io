.. title:: Package Recipe 'ngs-disambiguate'
.. highlight: bash


ngs-disambiguate
================

.. conda:recipe:: ngs-disambiguate
   :replaces_section_title:

   Disambiguation algorithm for reads aligned to human and mouse genomes using Tophat or BWA mem

   :homepage: https://github.com/AstraZeneca-NGS/disambiguate
   :license: MIT
   :recipe: /`ngs-disambiguate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngs-disambiguate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngs-disambiguate/meta.yaml>`_

   


.. conda:package:: ngs-disambiguate

   |downloads_ngs-disambiguate| |docker_ngs-disambiguate|

   :versions: 2018.05.03, 2016.11.10, 1.0.0

   :depends: :conda:package:`bamtools` 2.4.1* :conda:package:`libgcc`  

   :required~by: |required_by_ngs-disambiguate|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ngs-disambiguate

   and update with::

      conda update ngs-disambiguate

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ngs-disambiguate


.. |required_by_ngs-disambiguate| conda:required_by:: ngs-disambiguate
.. |downloads_ngs-disambiguate| image:: https://img.shields.io/conda/dn/bioconda/ngs-disambiguate.svg?style=flat
   :alt:   (downloads)
.. |docker_ngs-disambiguate| image:: https://quay.io/repository/biocontainers/ngs-disambiguate/status
   :target: https://quay.io/repository/biocontainers/ngs-disambiguate







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ngs-disambiguate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ngs-disambiguate/README.html


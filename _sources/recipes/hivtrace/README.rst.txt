.. title:: Package Recipe 'hivtrace'
.. highlight: bash


hivtrace
========

.. conda:recipe:: hivtrace
   :replaces_section_title:

   HIV TRACE is an application that identifies potential transmission clusters within a supplied FASTA file with an option to find potential links against the Los Alamos HIV Sequence Database.

   :homepage: https://github.com/veg/hivtrace
   :license: MIT
   :recipe: /`hivtrace <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hivtrace>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hivtrace/meta.yaml>`_

   


.. conda:package:: hivtrace

   |downloads_hivtrace| |docker_hivtrace|

   :versions: 0.1.6

   :depends: :conda:package:`biopython` >=1.58 :conda:package:`python` 3.4* :conda:package:`python-bioext` >=0.17.4 :conda:package:`python-hivclustering` >=1.2.0 :conda:package:`python-hppy` >=0.9.6 :conda:package:`python-hyphy-python` >=0.1.1 :conda:package:`tornado` >=4.3 

   :required~by: |required_by_hivtrace|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hivtrace

   and update with::

      conda update hivtrace

   or use the docker container::

      docker pull quay.io/repository/biocontainers/hivtrace


.. |required_by_hivtrace| conda:required_by:: hivtrace
.. |downloads_hivtrace| image:: https://img.shields.io/conda/dn/bioconda/hivtrace.svg?style=flat
   :alt:   (downloads)
.. |docker_hivtrace| image:: https://quay.io/repository/biocontainers/hivtrace/status
   :target: https://quay.io/repository/biocontainers/hivtrace







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hivtrace/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hivtrace/README.html


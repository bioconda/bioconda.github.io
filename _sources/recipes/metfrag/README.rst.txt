.. title:: Package Recipe 'metfrag'
.. highlight: bash


metfrag
=======

.. conda:recipe:: metfrag
   :replaces_section_title:

   MetFrag is a freely available software for the annotation of high precision tandem mass spectra of metabolites which is a first and critical step for the identification of a molecular structure. Candidate molecules of different databases are fragmented in silico and matched against mass to charge values. A score calculated using the fragment peak matches gives hints to the quality of the candidate spectrum assignment.

   :homepage: http://c-ruttkies.github.io/MetFrag/
   :license: GNU Lesser General Public License version 2.1 or later.
   :recipe: /`metfrag <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metfrag>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metfrag/meta.yaml>`_

   


.. conda:package:: metfrag

   |downloads_metfrag| |docker_metfrag|

   :versions: 2.4.5, 2.4.2, 2.3.1

   :depends: :conda:package:`openjdk` >=7 :conda:package:`parallel`  :conda:package:`unzip`  :conda:package:`zip`  

   :required~by: |required_by_metfrag|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install metfrag

   and update with::

      conda update metfrag

   or use the docker container::

      docker pull quay.io/repository/biocontainers/metfrag


.. |required_by_metfrag| conda:required_by:: metfrag
.. |downloads_metfrag| image:: https://img.shields.io/conda/dn/bioconda/metfrag.svg?style=flat
   :alt:   (downloads)
.. |docker_metfrag| image:: https://quay.io/repository/biocontainers/metfrag/status
   :target: https://quay.io/repository/biocontainers/metfrag







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metfrag/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metfrag/README.html


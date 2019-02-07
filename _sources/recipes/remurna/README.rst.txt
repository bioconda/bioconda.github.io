.. title:: Package Recipe 'remurna'
.. highlight: bash


remurna
=======

.. conda:recipe:: remurna
   :replaces_section_title:

   Measurement of Single\-Nucleotide Polymorphism\-induced Changes of RNA Conformation

   :homepage: https://www.ncbi.nlm.nih.gov/CBBresearch/Przytycka/index.cgi#remurna
   :license: 
   :recipe: /`remurna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/remurna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/remurna/meta.yaml>`_

   


.. conda:package:: remurna

   |downloads_remurna| |docker_remurna|

   :versions: 1.0

   :depends: :conda:package:`libgcc`  

   :required~by: |required_by_remurna|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install remurna

   and update with::

      conda update remurna

   or use the docker container::

      docker pull quay.io/repository/biocontainers/remurna


.. |required_by_remurna| conda:required_by:: remurna
.. |downloads_remurna| image:: https://img.shields.io/conda/dn/bioconda/remurna.svg?style=flat
   :alt:   (downloads)
.. |docker_remurna| image:: https://quay.io/repository/biocontainers/remurna/status
   :target: https://quay.io/repository/biocontainers/remurna







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/remurna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/remurna/README.html


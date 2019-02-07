.. title:: Package Recipe 'metacherchant'
.. highlight: bash


metacherchant
=============

.. conda:recipe:: metacherchant
   :replaces_section_title:

   genomic environment analysis tool

   :homepage: https://github.com/ctlab/metacherchant
   :license: MIT
   :recipe: /`metacherchant <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metacherchant>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metacherchant/meta.yaml>`_

   


.. conda:package:: metacherchant

   |downloads_metacherchant| |docker_metacherchant|

   :versions: 0.1.0

   :depends: :conda:package:`openjdk` >=7.0 

   :required~by: |required_by_metacherchant|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install metacherchant

   and update with::

      conda update metacherchant

   or use the docker container::

      docker pull quay.io/repository/biocontainers/metacherchant


.. |required_by_metacherchant| conda:required_by:: metacherchant
.. |downloads_metacherchant| image:: https://img.shields.io/conda/dn/bioconda/metacherchant.svg?style=flat
   :alt:   (downloads)
.. |docker_metacherchant| image:: https://quay.io/repository/biocontainers/metacherchant/status
   :target: https://quay.io/repository/biocontainers/metacherchant







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metacherchant/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metacherchant/README.html


.. title:: Package Recipe 'irfinder'
.. highlight: bash


irfinder
========

.. conda:recipe:: irfinder
   :replaces_section_title:

   Intron Retention Finder

   :homepage: https://github.com/williamritchie/IRFinder
   :license: MIT / MIT
   :recipe: /`irfinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/irfinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/irfinder/meta.yaml>`_

   


.. conda:package:: irfinder

   |downloads_irfinder| |docker_irfinder|

   :versions: 1.2.5, 1.2.4, 1.2.3, 1.2.2

   :depends: :conda:package:`perl`  :conda:package:`r-base`  

   :required~by: |required_by_irfinder|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install irfinder

   and update with::

      conda update irfinder

   or use the docker container::

      docker pull quay.io/repository/biocontainers/irfinder


.. |required_by_irfinder| conda:required_by:: irfinder
.. |downloads_irfinder| image:: https://img.shields.io/conda/dn/bioconda/irfinder.svg?style=flat
   :alt:   (downloads)
.. |docker_irfinder| image:: https://quay.io/repository/biocontainers/irfinder/status
   :target: https://quay.io/repository/biocontainers/irfinder







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/irfinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/irfinder/README.html


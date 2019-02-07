.. title:: Package Recipe 'pymummer'
.. highlight: bash


pymummer
========

.. conda:recipe:: pymummer
   :replaces_section_title:

   Wrapper for MUMmer

   :homepage: https://github.com/sanger-pathogens/pymummer
   :license: GNU General Public License v3 (GPLv3)
   :recipe: /`pymummer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pymummer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pymummer/meta.yaml>`_

   


.. conda:package:: pymummer

   |downloads_pymummer| |docker_pymummer|

   :versions: 0.10.3, 0.10.2, 0.10.1, 0.9.0, 0.8.1, 0.6.1

   :depends: :conda:package:`mummer`  :conda:package:`pyfastaq` >=3.10.0 :conda:package:`python` 3.5* 

   :required~by: |required_by_pymummer|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pymummer

   and update with::

      conda update pymummer

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pymummer


.. |required_by_pymummer| conda:required_by:: pymummer
.. |downloads_pymummer| image:: https://img.shields.io/conda/dn/bioconda/pymummer.svg?style=flat
   :alt:   (downloads)
.. |docker_pymummer| image:: https://quay.io/repository/biocontainers/pymummer/status
   :target: https://quay.io/repository/biocontainers/pymummer







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pymummer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pymummer/README.html


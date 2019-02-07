.. title:: Package Recipe 'inheritance'
.. highlight: bash


inheritance
===========

.. conda:recipe:: inheritance
   :replaces_section_title:

   inheritance models for mendelian diseases

   :homepage: https://github.com/brentp/inheritance
   :license: MIT
   :recipe: /`inheritance <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/inheritance>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/inheritance/meta.yaml>`_

   


.. conda:package:: inheritance

   |downloads_inheritance| |docker_inheritance|

   :versions: 0.1.4, 0.1.3, 0.1.2, 0.0.9, 0.0.7, 0.0.6, 0.0.5, 0.0.4, 0.0.3

   :depends: :conda:package:`python`  

   :required~by: |required_by_inheritance|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install inheritance

   and update with::

      conda update inheritance

   or use the docker container::

      docker pull quay.io/repository/biocontainers/inheritance


.. |required_by_inheritance| conda:required_by:: inheritance
.. |downloads_inheritance| image:: https://img.shields.io/conda/dn/bioconda/inheritance.svg?style=flat
   :alt:   (downloads)
.. |docker_inheritance| image:: https://quay.io/repository/biocontainers/inheritance/status
   :target: https://quay.io/repository/biocontainers/inheritance







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/inheritance/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/inheritance/README.html


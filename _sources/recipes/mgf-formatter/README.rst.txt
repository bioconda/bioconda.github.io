.. title:: Package Recipe 'mgf-formatter'
.. highlight: bash


mgf-formatter
=============

.. conda:recipe:: mgf-formatter
   :replaces_section_title:

   Tools for convert peak lists into MGF files formatted for particular downstream applications

   :homepage: https://bitbucket.org/galaxyp-applications/mgf-formatter
   :license: Eclipse Public License
   :recipe: /`mgf-formatter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mgf-formatter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mgf-formatter/meta.yaml>`_

   


.. conda:package:: mgf-formatter

   |downloads_mgf-formatter| |docker_mgf-formatter|

   :versions: 1.0.0

   :depends: :conda:package:`java-jdk`  :conda:package:`python` 2.7* 

   :required~by: |required_by_mgf-formatter|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mgf-formatter

   and update with::

      conda update mgf-formatter

   or use the docker container::

      docker pull quay.io/repository/biocontainers/mgf-formatter


.. |required_by_mgf-formatter| conda:required_by:: mgf-formatter
.. |downloads_mgf-formatter| image:: https://img.shields.io/conda/dn/bioconda/mgf-formatter.svg?style=flat
   :alt:   (downloads)
.. |docker_mgf-formatter| image:: https://quay.io/repository/biocontainers/mgf-formatter/status
   :target: https://quay.io/repository/biocontainers/mgf-formatter







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mgf-formatter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mgf-formatter/README.html


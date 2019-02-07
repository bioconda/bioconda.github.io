.. title:: Package Recipe 'ac-diamond'
.. highlight: bash


ac-diamond
==========

.. conda:recipe:: ac-diamond
   :replaces_section_title:

   AC\-DIAMOND is a DNA\-protein alignment tool

   :homepage: https://github.com/Maihj/AC-DIAMOND
   :license: GNU Affero General Public License v3.0
   :recipe: /`ac-diamond <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ac-diamond>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ac-diamond/meta.yaml>`_

   


.. conda:package:: ac-diamond

   |downloads_ac-diamond| |docker_ac-diamond|

   :versions: 1.0

   :depends: :conda:package:`boost` 1.64* :conda:package:`libgcc`  

   :required~by: |required_by_ac-diamond|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ac-diamond

   and update with::

      conda update ac-diamond

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ac-diamond


.. |required_by_ac-diamond| conda:required_by:: ac-diamond
.. |downloads_ac-diamond| image:: https://img.shields.io/conda/dn/bioconda/ac-diamond.svg?style=flat
   :alt:   (downloads)
.. |docker_ac-diamond| image:: https://quay.io/repository/biocontainers/ac-diamond/status
   :target: https://quay.io/repository/biocontainers/ac-diamond







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ac-diamond/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ac-diamond/README.html


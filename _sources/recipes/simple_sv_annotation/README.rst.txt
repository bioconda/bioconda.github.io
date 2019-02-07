.. title:: Package Recipe 'simple_sv_annotation'
.. highlight: bash


simple_sv_annotation
====================

.. conda:recipe:: simple_sv_annotation
   :replaces_section_title:

   Simplify snpEff annotations for interesting cases

   :homepage: https://github.com/AstraZeneca-NGS/simple_sv_annotation
   :license: MIT
   :recipe: /`simple_sv_annotation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/simple_sv_annotation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/simple_sv_annotation/meta.yaml>`_

   


.. conda:package:: simple_sv_annotation

   |downloads_simple_sv_annotation| |docker_simple_sv_annotation|

   :versions: 2018.05.29, 2017.05.14, 2017.02.17, 2016.07.08, 2016.06.15, 2015.11.24, 2015.11.16, 2015.11.05, 2015.10.23

   :depends: :conda:package:`python` 2.7* :conda:package:`pyvcf`  

   :required~by: |required_by_simple_sv_annotation|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install simple_sv_annotation

   and update with::

      conda update simple_sv_annotation

   or use the docker container::

      docker pull quay.io/repository/biocontainers/simple_sv_annotation


.. |required_by_simple_sv_annotation| conda:required_by:: simple_sv_annotation
.. |downloads_simple_sv_annotation| image:: https://img.shields.io/conda/dn/bioconda/simple_sv_annotation.svg?style=flat
   :alt:   (downloads)
.. |docker_simple_sv_annotation| image:: https://quay.io/repository/biocontainers/simple_sv_annotation/status
   :target: https://quay.io/repository/biocontainers/simple_sv_annotation







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/simple_sv_annotation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/simple_sv_annotation/README.html


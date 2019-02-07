.. title:: Package Recipe 'gatk-framework'
.. highlight: bash


gatk-framework
==============

.. conda:recipe:: gatk-framework
   :replaces_section_title:

   The core MIT\-licensed Genome Analysis Toolkit \(GATK\) framework\, free for all uses

   :homepage: https://github.com/chapmanb/gatk
   :license: MIT
   :recipe: /`gatk-framework <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gatk-framework>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gatk-framework/meta.yaml>`_

   


.. conda:package:: gatk-framework

   |downloads_gatk-framework| |docker_gatk-framework|

   :versions: 3.6.24, 3.5.21, 3.4.46

   :depends: :conda:package:`java-jdk` >=8,<9 

   :required~by: |required_by_gatk-framework|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gatk-framework

   and update with::

      conda update gatk-framework

   or use the docker container::

      docker pull quay.io/repository/biocontainers/gatk-framework


.. |required_by_gatk-framework| conda:required_by:: gatk-framework
.. |downloads_gatk-framework| image:: https://img.shields.io/conda/dn/bioconda/gatk-framework.svg?style=flat
   :alt:   (downloads)
.. |docker_gatk-framework| image:: https://quay.io/repository/biocontainers/gatk-framework/status
   :target: https://quay.io/repository/biocontainers/gatk-framework







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gatk-framework/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gatk-framework/README.html


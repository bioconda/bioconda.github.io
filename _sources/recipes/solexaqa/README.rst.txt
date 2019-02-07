.. title:: Package Recipe 'solexaqa'
.. highlight: bash


solexaqa
========

.. conda:recipe:: solexaqa
   :replaces_section_title:

   Quality statistics and visual representations for second\-generation sequencing data

   :homepage: http://solexaqa.sourceforge.net/
   :license: GPLv3
   :recipe: /`solexaqa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/solexaqa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/solexaqa/meta.yaml>`_
   :links: doi: :doi:`10.1186/1471-2105-11-485`

   


.. conda:package:: solexaqa

   |downloads_solexaqa| |docker_solexaqa|

   :versions: 3.1.7.1

   :depends: :conda:package:`boost` >=1.67.0,<1.67.1.0a0 :conda:package:`icu` >=58.2,<59.0a0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`libstdcxx-ng` >=7.3.0 :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_solexaqa|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install solexaqa

   and update with::

      conda update solexaqa

   or use the docker container::

      docker pull quay.io/repository/biocontainers/solexaqa


.. |required_by_solexaqa| conda:required_by:: solexaqa
.. |downloads_solexaqa| image:: https://img.shields.io/conda/dn/bioconda/solexaqa.svg?style=flat
   :alt:   (downloads)
.. |docker_solexaqa| image:: https://quay.io/repository/biocontainers/solexaqa/status
   :target: https://quay.io/repository/biocontainers/solexaqa







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/solexaqa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/solexaqa/README.html


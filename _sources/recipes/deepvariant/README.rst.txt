.. title:: Package Recipe 'deepvariant'
.. highlight: bash


deepvariant
===========

.. conda:recipe:: deepvariant
   :replaces_section_title:

   DeepVariant is an analysis pipeline that uses a deep neural network to call genetic variants from next\-generation DNA sequencing data

   :homepage: https://github.com/google/deepvariant
   :license: MIT
   :recipe: /`deepvariant <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepvariant>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepvariant/meta.yaml>`_

   


.. conda:package:: deepvariant

   |downloads_deepvariant| |docker_deepvariant|

   :versions: 0.7.2, 0.7.1, 0.7.0, 0.6.1, 0.6.0, 0.4.1

   :depends: :conda:package:`boost`  :conda:package:`contextlib2`  :conda:package:`crcmod`  :conda:package:`curl` >=7.59.0,<8.0a0 :conda:package:`enum34`  :conda:package:`google-cloud-sdk`  :conda:package:`htslib`  :conda:package:`intervaltree`  :conda:package:`mock`  :conda:package:`numpy` 1.14.* :conda:package:`oauth2client`  :conda:package:`openjdk` >=8,<9 :conda:package:`parallel`  :conda:package:`protobuf`  :conda:package:`psutil`  :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`requests`  :conda:package:`scipy`  :conda:package:`six`  :conda:package:`tensorflow` 1.11.* :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_deepvariant|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install deepvariant

   and update with::

      conda update deepvariant

   or use the docker container::

      docker pull quay.io/repository/biocontainers/deepvariant


.. |required_by_deepvariant| conda:required_by:: deepvariant
.. |downloads_deepvariant| image:: https://img.shields.io/conda/dn/bioconda/deepvariant.svg?style=flat
   :alt:   (downloads)
.. |docker_deepvariant| image:: https://quay.io/repository/biocontainers/deepvariant/status
   :target: https://quay.io/repository/biocontainers/deepvariant







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deepvariant/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deepvariant/README.html


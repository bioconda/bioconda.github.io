.. title:: Package Recipe 'truvari'
.. highlight: bash


truvari
=======

.. conda:recipe:: truvari
   :replaces_section_title:

   Structural variant comparison tool for VCFs

   :homepage: https://github.com/spiralgenetics/truvari
   :license: MIT
   :recipe: /`truvari <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/truvari>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/truvari/meta.yaml>`_

   


.. conda:package:: truvari

   |downloads_truvari| |docker_truvari|

   :versions: 0.1.2018.08.10

   :depends: :conda:package:`intervaltree`  :conda:package:`progressbar2`  :conda:package:`pyfaidx`  :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`python-levenshtein`  :conda:package:`pyvcf`  

   :required~by: |required_by_truvari|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install truvari

   and update with::

      conda update truvari

   or use the docker container::

      docker pull quay.io/repository/biocontainers/truvari


.. |required_by_truvari| conda:required_by:: truvari
.. |downloads_truvari| image:: https://img.shields.io/conda/dn/bioconda/truvari.svg?style=flat
   :alt:   (downloads)
.. |docker_truvari| image:: https://quay.io/repository/biocontainers/truvari/status
   :target: https://quay.io/repository/biocontainers/truvari







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/truvari/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/truvari/README.html


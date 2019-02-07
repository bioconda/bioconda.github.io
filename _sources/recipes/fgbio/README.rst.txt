.. title:: Package Recipe 'fgbio'
.. highlight: bash


fgbio
=====

.. conda:recipe:: fgbio
   :replaces_section_title:

   A set of tools for working with genomic and high throughput sequencing data\, including UMIs

   :homepage: https://github.com/fulcrumgenomics/fgbio
   :license: MIT
   :recipe: /`fgbio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fgbio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fgbio/meta.yaml>`_

   


.. conda:package:: fgbio

   |downloads_fgbio| |docker_fgbio|

   :versions: 0.7.0, 0.6.1, 0.5.0a, 0.4.0, 0.2.1b, 0.2.1a, 0.2.0, 0.1.5a, 0.1.3a, 0.1.2a

   :depends: :conda:package:`openjdk` >=8 :conda:package:`python`  

   :required~by: |required_by_fgbio|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fgbio

   and update with::

      conda update fgbio

   or use the docker container::

      docker pull quay.io/repository/biocontainers/fgbio


.. |required_by_fgbio| conda:required_by:: fgbio
.. |downloads_fgbio| image:: https://img.shields.io/conda/dn/bioconda/fgbio.svg?style=flat
   :alt:   (downloads)
.. |docker_fgbio| image:: https://quay.io/repository/biocontainers/fgbio/status
   :target: https://quay.io/repository/biocontainers/fgbio







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fgbio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fgbio/README.html


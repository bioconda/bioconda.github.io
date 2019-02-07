.. title:: Package Recipe 'fusion-inspector'
.. highlight: bash


fusion-inspector
================

.. conda:recipe:: fusion-inspector
   :replaces_section_title:

   FusionInspector is a component of the Trinity Cancer Transcriptome Analysis Toolkit \(CTAT\). FusionInspector assists in fusion transcript discovery by performing a supervised analysis of fusion predictions\, attempting to recover and re\-score evidence for such predictions. \- https\:\/\/github.com\/FusionInspector\/FusionInspector\/wiki

   :homepage: https://github.com/FusionInspector/FusionInspector
   :license: BSD-3-Clause
   :recipe: /`fusion-inspector <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fusion-inspector>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fusion-inspector/meta.yaml>`_

   


.. conda:package:: fusion-inspector

   |downloads_fusion-inspector| |docker_fusion-inspector|

   :versions: 1.3.1, 1.2.0, 1.1.0

   :depends: :conda:package:`bzip2` >=1.0.6,<2.0a0 :conda:package:`gmap` >=2017.11.15 :conda:package:`htslib` >=1.9,<1.10.0a0 :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-db-file`  :conda:package:`perl-set-intervaltree`  :conda:package:`perl-uri`  :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`samtools` >=1.3 :conda:package:`star` >=2.6.1b :conda:package:`trinity` >=2.4 

   :required~by: |required_by_fusion-inspector|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fusion-inspector

   and update with::

      conda update fusion-inspector

   or use the docker container::

      docker pull quay.io/repository/biocontainers/fusion-inspector


.. |required_by_fusion-inspector| conda:required_by:: fusion-inspector
.. |downloads_fusion-inspector| image:: https://img.shields.io/conda/dn/bioconda/fusion-inspector.svg?style=flat
   :alt:   (downloads)
.. |docker_fusion-inspector| image:: https://quay.io/repository/biocontainers/fusion-inspector/status
   :target: https://quay.io/repository/biocontainers/fusion-inspector







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fusion-inspector/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fusion-inspector/README.html


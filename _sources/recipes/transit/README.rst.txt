.. title:: Package Recipe 'transit'
.. highlight: bash


transit
=======

.. conda:recipe:: transit
   :replaces_section_title:

   TRANSIT

   :homepage: http://github.com/mad-lab/transit
   :developer docs: https://github.com/simongog/sdsl-lite
   :license: GPL / GPL-3
   :recipe: /`transit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/transit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/transit/meta.yaml>`_

   TRANSIT is a software that can be used to analyze Tn\-Seq datasets.
   It includes various statistical calculations of essentiality of
   genes or genomic regions \(including conditional essentiality
   between 2 conditions\).



.. conda:package:: transit

   |downloads_transit| |docker_transit|

   :versions: 2.3.3, 2.3.2, 2.3.1

   :depends: :conda:package:`matplotlib` >=2.2 :conda:package:`numpy` >=1.15 :conda:package:`pillow` >=5.0 :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`scipy` >=1.1 :conda:package:`statsmodels` >=0.9 

   :required~by: |required_by_transit|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install transit

   and update with::

      conda update transit

   or use the docker container::

      docker pull quay.io/repository/biocontainers/transit


.. |required_by_transit| conda:required_by:: transit
.. |downloads_transit| image:: https://img.shields.io/conda/dn/bioconda/transit.svg?style=flat
   :alt:   (downloads)
.. |docker_transit| image:: https://quay.io/repository/biocontainers/transit/status
   :target: https://quay.io/repository/biocontainers/transit







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/transit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/transit/README.html


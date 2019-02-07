.. title:: Package Recipe 'anvio'
.. highlight: bash


anvio
=====

.. conda:recipe:: anvio
   :replaces_section_title:

   An interactive analysis and visualization platform for omics data

   :homepage: http://merenlab.org/software/anvio/index.html
   :developer docs: https://github.com/merenlab/anvio
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`anvio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/anvio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/anvio/meta.yaml>`_

   


.. conda:package:: anvio

   |downloads_anvio| |docker_anvio|

   :versions: 5.2.0, 5.1.0, 5.0.0, 4.0.0, 3.0.0, 2.4.0, 2.3.2, 2.1.0

   :depends: :conda:package:`anvio-minimal` 5.2.0 :conda:package:`blast`  :conda:package:`bowtie2`  :conda:package:`bwa`  :conda:package:`centrifuge`  :conda:package:`diamond`  :conda:package:`hmmer`  :conda:package:`iqtree`  :conda:package:`mcl`  :conda:package:`megahit`  :conda:package:`muscle`  :conda:package:`prodigal`  :conda:package:`samtools`  :conda:package:`trimal`  

   :required~by: |required_by_anvio|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install anvio

   and update with::

      conda update anvio

   or use the docker container::

      docker pull quay.io/repository/biocontainers/anvio


.. |required_by_anvio| conda:required_by:: anvio
.. |downloads_anvio| image:: https://img.shields.io/conda/dn/bioconda/anvio.svg?style=flat
   :alt:   (downloads)
.. |docker_anvio| image:: https://quay.io/repository/biocontainers/anvio/status
   :target: https://quay.io/repository/biocontainers/anvio







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/anvio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/anvio/README.html


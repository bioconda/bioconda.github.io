:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'barrnap'
.. highlight: bash

barrnap
=======

.. conda:recipe:: barrnap
   :replaces_section_title:

   Barrnap predicts the location of ribosomal RNA genes in genomes. \(bacteria\, archaea\, metazoan mitochondria and eukaryotes.\)

   :homepage: https://github.com/tseemann/barrnap
   :license: GPLv3
   :recipe: /`barrnap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/barrnap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/barrnap/meta.yaml>`_
   :links: biotools: :biotools:`barrnap`

   


.. conda:package:: barrnap

   |downloads_barrnap| |docker_barrnap|

   :versions: 0.9-2, 0.9-1, 0.9-0, 0.8-1, 0.8-0, 0.7-4, 0.7-3, 0.7-2, 0.7-1, 0.7-0, 0.3-2, 0.3-1, 0.3-0, 0.2-1, 0.2-0
   
   :depends bedtools: 
   
   :depends hmmer: >=3.1b
   
   :depends perl: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install barrnap

   and update with::

      conda update barrnap

   or use the docker container::

      docker pull quay.io/repository/biocontainers/barrnap:<tag>

   (see `barrnap/tags`_ for valid values for ``<tag>``)


.. |downloads_barrnap| image:: https://img.shields.io/conda/dn/bioconda/barrnap.svg?style=flat
   :alt:   (downloads)
.. |docker_barrnap| image:: https://quay.io/repository/biocontainers/barrnap/status
   :target: https://quay.io/repository/biocontainers/barrnap
.. _`barrnap/tags`: https://quay.io/repository/biocontainers/barrnap?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/barrnap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/barrnap/README.html
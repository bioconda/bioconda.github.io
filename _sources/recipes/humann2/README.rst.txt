.. title:: Package Recipe 'humann2'
.. highlight: bash


humann2
=======

.. conda:recipe:: humann2
   :replaces_section_title:

   HUMAnN2\: The HMP Unified Metabolic Analysis Network 2

   :homepage: http://huttenhower.sph.harvard.edu/humann2
   :license: MIT / MIT
   :recipe: /`humann2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/humann2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/humann2/meta.yaml>`_

   


.. conda:package:: humann2

   |downloads_humann2| |docker_humann2|

   :versions: 0.11.2, 0.11.1, 0.9.9, 0.6.1, 0.5.0

   :depends: :conda:package:`biom-format`  :conda:package:`bowtie2` >=2.2.5 :conda:package:`diamond` >=0.7.10,<0.9.0 :conda:package:`matplotlib`  :conda:package:`metaphlan2` >=2.6.0 :conda:package:`numpy`  :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`samtools`  :conda:package:`scipy`  

   :required~by: |required_by_humann2|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install humann2

   and update with::

      conda update humann2

   or use the docker container::

      docker pull quay.io/repository/biocontainers/humann2


.. |required_by_humann2| conda:required_by:: humann2
.. |downloads_humann2| image:: https://img.shields.io/conda/dn/bioconda/humann2.svg?style=flat
   :alt:   (downloads)
.. |docker_humann2| image:: https://quay.io/repository/biocontainers/humann2/status
   :target: https://quay.io/repository/biocontainers/humann2







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/humann2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/humann2/README.html


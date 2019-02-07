.. title:: Package Recipe 'binsanity'
.. highlight: bash


binsanity
=========

.. conda:recipe:: binsanity
   :replaces_section_title:

   Method to cluster contigs based a biphasic method with coverage and composition

   :homepage: https://github.com/edgraham/BinSanity
   :license: GPL / GPL-3.0
   :recipe: /`binsanity <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/binsanity>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/binsanity/meta.yaml>`_

   


.. conda:package:: binsanity

   |downloads_binsanity| |docker_binsanity|

   :versions: 0.2.7.1, 0.2.6.3, 0.2.6.1

   :depends: :conda:package:`biopython`  :conda:package:`checkm-genome`  :conda:package:`pandas` >=0.13.0 :conda:package:`python` <3 :conda:package:`scikit-learn`  :conda:package:`scipy` >=0.13.0 :conda:package:`subread`  

   :required~by: |required_by_binsanity|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install binsanity

   and update with::

      conda update binsanity

   or use the docker container::

      docker pull quay.io/repository/biocontainers/binsanity


.. |required_by_binsanity| conda:required_by:: binsanity
.. |downloads_binsanity| image:: https://img.shields.io/conda/dn/bioconda/binsanity.svg?style=flat
   :alt:   (downloads)
.. |docker_binsanity| image:: https://quay.io/repository/biocontainers/binsanity/status
   :target: https://quay.io/repository/biocontainers/binsanity







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/binsanity/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/binsanity/README.html


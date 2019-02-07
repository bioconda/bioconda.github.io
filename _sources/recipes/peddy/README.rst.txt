.. title:: Package Recipe 'peddy'
.. highlight: bash


peddy
=====

.. conda:recipe:: peddy
   :replaces_section_title:

   genotype \:\: ped correspondence check\, ancestry check\, sex check. directly\, quickly on VCF

   :homepage: https://github.com/brentp/peddy
   :license: MIT / MIT License
   :recipe: /`peddy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/peddy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/peddy/meta.yaml>`_

   


.. conda:package:: peddy

   |downloads_peddy| |docker_peddy|

   :versions: 0.4.3, 0.4.2, 0.4.1, 0.3.6a, 0.3.1, 0.2.9, 0.2.5, 0.2.2, 0.2.0, 0.1.3, 0.1.2, 0.1.1, 0.0.4

   :depends: :conda:package:`click`  :conda:package:`coloredlogs`  :conda:package:`cyvcf2` >=0.5.3 :conda:package:`matplotlib` >=1.5.0 :conda:package:`networkx`  :conda:package:`numpy`  :conda:package:`pandas`  :conda:package:`python` <3 :conda:package:`scikit-learn`  :conda:package:`seaborn`  :conda:package:`toolshed`  

   :required~by: |required_by_peddy|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install peddy

   and update with::

      conda update peddy

   or use the docker container::

      docker pull quay.io/repository/biocontainers/peddy


.. |required_by_peddy| conda:required_by:: peddy
.. |downloads_peddy| image:: https://img.shields.io/conda/dn/bioconda/peddy.svg?style=flat
   :alt:   (downloads)
.. |docker_peddy| image:: https://quay.io/repository/biocontainers/peddy/status
   :target: https://quay.io/repository/biocontainers/peddy







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/peddy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/peddy/README.html


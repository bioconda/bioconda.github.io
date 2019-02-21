:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nucleosome_prediction'
.. highlight: bash

nucleosome_prediction
=====================

.. conda:recipe:: nucleosome_prediction
   :replaces_section_title:

   This tool allows you to submit a genomic sequence and to recieve a prediction of the nucleosomes positions on it\,

   :homepage: https://genie.weizmann.ac.il/software/nucleo_prediction.html
   :license: LGPLv2
   :recipe: /`nucleosome_prediction <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nucleosome_prediction>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nucleosome_prediction/meta.yaml>`_

   


.. conda:package:: nucleosome_prediction

   |downloads_nucleosome_prediction| |docker_nucleosome_prediction|

   :versions: 3.0-0
   
   :depends libgcc-ng: >=7.3.0
   
   :depends libstdcxx-ng: >=7.3.0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nucleosome_prediction

   and update with::

      conda update nucleosome_prediction

   or use the docker container::

      docker pull quay.io/biocontainers/nucleosome_prediction:<tag>

   (see `nucleosome_prediction/tags`_ for valid values for ``<tag>``)


.. |downloads_nucleosome_prediction| image:: https://img.shields.io/conda/dn/bioconda/nucleosome_prediction.svg?style=flat
   :alt:   (downloads)
.. |docker_nucleosome_prediction| image:: https://quay.io/repository/biocontainers/nucleosome_prediction/status
   :target: https://quay.io/repository/biocontainers/nucleosome_prediction
.. _`nucleosome_prediction/tags`: https://quay.io/repository/biocontainers/nucleosome_prediction?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nucleosome_prediction/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nucleosome_prediction/README.html
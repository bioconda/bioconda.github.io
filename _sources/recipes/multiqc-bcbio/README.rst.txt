.. title:: Package Recipe 'multiqc-bcbio'
.. highlight: bash


multiqc-bcbio
=============

.. conda:recipe:: multiqc-bcbio
   :replaces_section_title:

   MultiQC plugin for bcbio report visualization.

   :homepage: http://multiqc.info
   :license: GNU General Public License v3 (GPLv3)
   :recipe: /`multiqc-bcbio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/multiqc-bcbio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/multiqc-bcbio/meta.yaml>`_

   


.. conda:package:: multiqc-bcbio

   |downloads_multiqc-bcbio| |docker_multiqc-bcbio|

   :versions: 0.2.6, 0.2.5, 0.2.4, 0.2.3, 0.2.2, 0.2.1, 0.2.0, 0.2.0dev, 0.1.9, 0.1.8, 0.1.7, 0.1.6, 0.1.5, 0.1.4, 0.1.3, 0.1.2, 0.1.1, 0.1.0

   :depends: :conda:package:`multiqc` >=1.2 :conda:package:`python` 2.7* 

   :required~by: |required_by_multiqc-bcbio|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install multiqc-bcbio

   and update with::

      conda update multiqc-bcbio

   or use the docker container::

      docker pull quay.io/repository/biocontainers/multiqc-bcbio


.. |required_by_multiqc-bcbio| conda:required_by:: multiqc-bcbio
.. |downloads_multiqc-bcbio| image:: https://img.shields.io/conda/dn/bioconda/multiqc-bcbio.svg?style=flat
   :alt:   (downloads)
.. |docker_multiqc-bcbio| image:: https://quay.io/repository/biocontainers/multiqc-bcbio/status
   :target: https://quay.io/repository/biocontainers/multiqc-bcbio







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/multiqc-bcbio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/multiqc-bcbio/README.html


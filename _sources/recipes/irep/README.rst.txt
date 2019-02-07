.. title:: Package Recipe 'irep'
.. highlight: bash


irep
====

.. conda:recipe:: irep
   :replaces_section_title:

   calculate iRep replication rates from metagenome sequencing

   :homepage: https://github.com/christophertbrown/iRep
   :license: MIT / MIT
   :recipe: /`irep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/irep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/irep/meta.yaml>`_

   


.. conda:package:: irep

   |downloads_irep| |docker_irep|

   :versions: 1.1.7

   :depends: :conda:package:`lmfit`  :conda:package:`matplotlib`  :conda:package:`numpy`  :conda:package:`pandas`  :conda:package:`python` 2.7* :conda:package:`scipy`  :conda:package:`seaborn`  

   :required~by: |required_by_irep|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install irep

   and update with::

      conda update irep

   or use the docker container::

      docker pull quay.io/repository/biocontainers/irep


.. |required_by_irep| conda:required_by:: irep
.. |downloads_irep| image:: https://img.shields.io/conda/dn/bioconda/irep.svg?style=flat
   :alt:   (downloads)
.. |docker_irep| image:: https://quay.io/repository/biocontainers/irep/status
   :target: https://quay.io/repository/biocontainers/irep







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/irep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/irep/README.html


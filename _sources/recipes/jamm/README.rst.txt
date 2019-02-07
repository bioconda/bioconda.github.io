.. title:: Package Recipe 'jamm'
.. highlight: bash


jamm
====

.. conda:recipe:: jamm
   :replaces_section_title:

   JAMM is a peak finder for NGS datasets \(ChIP\-Seq\, ATAC\-Seq\, DNase\-Seq..etc.\) that can integrate replicates and assign peak boundaries accurately.

   :homepage: https://github.com/mahmoudibrahim/JAMM
   :license: GPL
   :recipe: /`jamm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jamm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jamm/meta.yaml>`_

   


.. conda:package:: jamm

   |downloads_jamm| |docker_jamm|

   :versions: 1.0.7.5, 1.0.7.4, 1.0.7.2

   :depends: :conda:package:`gawk`  :conda:package:`perl`  :conda:package:`r-mclust` >=5.3 :conda:package:`r-signal`  

   :required~by: |required_by_jamm|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install jamm

   and update with::

      conda update jamm

   or use the docker container::

      docker pull quay.io/repository/biocontainers/jamm


.. |required_by_jamm| conda:required_by:: jamm
.. |downloads_jamm| image:: https://img.shields.io/conda/dn/bioconda/jamm.svg?style=flat
   :alt:   (downloads)
.. |docker_jamm| image:: https://quay.io/repository/biocontainers/jamm/status
   :target: https://quay.io/repository/biocontainers/jamm







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jamm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jamm/README.html


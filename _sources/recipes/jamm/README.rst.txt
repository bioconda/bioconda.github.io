:orphan:  .. only available via index, not via toctree

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

   :versions: 1.0.7.5-2, 1.0.7.5-1, 1.0.7.5-0, 1.0.7.4-0, 1.0.7.2-3, 1.0.7.2-2, 1.0.7.2-1, 1.0.7.2-0
   
   :depends gawk: 
   
   :depends perl: 
   
   :depends r-mclust: >=5.3
   
   :depends r-signal: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install jamm

   and update with::

      conda update jamm

   or use the docker container::

      docker pull quay.io/biocontainers/jamm:<tag>

   (see `jamm/tags`_ for valid values for ``<tag>``)


.. |downloads_jamm| image:: https://img.shields.io/conda/dn/bioconda/jamm.svg?style=flat
   :alt:   (downloads)
.. |docker_jamm| image:: https://quay.io/repository/biocontainers/jamm/status
   :target: https://quay.io/repository/biocontainers/jamm
.. _`jamm/tags`: https://quay.io/repository/biocontainers/jamm?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jamm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jamm/README.html
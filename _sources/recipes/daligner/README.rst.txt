:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'daligner'
.. highlight: bash

daligner
========

.. conda:recipe:: daligner
   :replaces_section_title:

   DALIGNER\: Find all significant local alignments between reads

   :homepage: https://github.com/thegenemyers/DALIGNER
   :license: Custom
   :recipe: /`daligner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/daligner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/daligner/meta.yaml>`_

   


.. conda:package:: daligner

   |downloads_daligner| |docker_daligner|

   :versions: 1.0-0, 1.0p2-1, 1.0p2-0, 1.0p1-2, 1.0p1-1, 1.0p1-0
   
   :depends libgcc: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install daligner

   and update with::

      conda update daligner

   or use the docker container::

      docker pull quay.io/biocontainers/daligner:<tag>

   (see `daligner/tags`_ for valid values for ``<tag>``)


.. |downloads_daligner| image:: https://img.shields.io/conda/dn/bioconda/daligner.svg?style=flat
   :alt:   (downloads)
.. |docker_daligner| image:: https://quay.io/repository/biocontainers/daligner/status
   :target: https://quay.io/repository/biocontainers/daligner
.. _`daligner/tags`: https://quay.io/repository/biocontainers/daligner?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/daligner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/daligner/README.html
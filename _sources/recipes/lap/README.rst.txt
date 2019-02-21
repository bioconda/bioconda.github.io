:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lap'
.. highlight: bash

lap
===

.. conda:recipe:: lap
   :replaces_section_title:

   De novo genome assembly evaluation

   :homepage: http://assembly-eval.sourceforge.net/
   :license: 
   :recipe: /`lap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lap/meta.yaml>`_

   


.. conda:package:: lap

   |downloads_lap| |docker_lap|

   :versions: 1.1.r186-0
   
   :depends bowtie2: 
   
   :depends libgcc: 
   
   :depends python: 2.7*
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install lap

   and update with::

      conda update lap

   or use the docker container::

      docker pull quay.io/biocontainers/lap:<tag>

   (see `lap/tags`_ for valid values for ``<tag>``)


.. |downloads_lap| image:: https://img.shields.io/conda/dn/bioconda/lap.svg?style=flat
   :alt:   (downloads)
.. |docker_lap| image:: https://quay.io/repository/biocontainers/lap/status
   :target: https://quay.io/repository/biocontainers/lap
.. _`lap/tags`: https://quay.io/repository/biocontainers/lap?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lap/README.html
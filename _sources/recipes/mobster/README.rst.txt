:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mobster'
.. highlight: bash

mobster
=======

.. conda:recipe:: mobster
   :replaces_section_title:

   NGS tool for detecting MEI and gene retrotransposition events in WGS and WES data\, see Thung et al. Genome Biol. 2014 for more information.

   :homepage: https://github.com/jyhehir/mobster
   :license: GPL3
   :recipe: /`mobster <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mobster>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mobster/meta.yaml>`_

   


.. conda:package:: mobster

   |downloads_mobster| |docker_mobster|

   :versions: 0.2.4.1-1, 0.2.4.1-0, 0.2.3.1-0, 0.2.2-1, 0.2.2-0, 0.2.1-0
   
   :depends mosaik: 
   
   :depends openjdk: 
   
   :depends python: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mobster

   and update with::

      conda update mobster

   or use the docker container::

      docker pull quay.io/repository/biocontainers/mobster:<tag>

   (see `mobster/tags`_ for valid values for ``<tag>``)


.. |downloads_mobster| image:: https://img.shields.io/conda/dn/bioconda/mobster.svg?style=flat
   :alt:   (downloads)
.. |docker_mobster| image:: https://quay.io/repository/biocontainers/mobster/status
   :target: https://quay.io/repository/biocontainers/mobster
.. _`mobster/tags`: https://quay.io/repository/biocontainers/mobster?tab=tags






Notes
-----
After installation\, mobster is available as command \`mobster\`.
Further\, you can convert mobster output to vcf with the command \`mobster\-to\-vcf\`.


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mobster/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mobster/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snakesv'
.. highlight: bash

snakesv
=======

.. conda:recipe:: snakesv
   :replaces_section_title:
   :noindex:

   snakeSV\: Flexible framework for large\-scale SV discovery

   :homepage: https://github.com/RajLabMSSM/snakeSV/
   :license: The MIT License (MIT)
   :recipe: /`snakesv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakesv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakesv/meta.yaml>`_

   


.. conda:package:: snakesv

   |downloads_snakesv| |docker_snakesv|

   :versions:
      
      

      ``0.3.1-0``,  ``0.2-0``

      

   
   :depends mamba: ``>=0.14.1``
   :depends pandas: ``>=1.3.0``
   :depends snakemake: ``>=6.5.2``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install snakesv

   and update with::

      conda update snakesv

   or use the docker container::

      docker pull quay.io/biocontainers/snakesv:<tag>

   (see `snakesv/tags`_ for valid values for ``<tag>``)


.. |downloads_snakesv| image:: https://img.shields.io/conda/dn/bioconda/snakesv.svg?style=flat
   :target: https://anaconda.org/bioconda/snakesv
   :alt:   (downloads)
.. |docker_snakesv| image:: https://quay.io/repository/biocontainers/snakesv/status
   :target: https://quay.io/repository/biocontainers/snakesv
.. _`snakesv/tags`: https://quay.io/repository/biocontainers/snakesv?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snakesv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snakesv/README.html
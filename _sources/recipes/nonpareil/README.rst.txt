:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nonpareil'
.. highlight: bash

nonpareil
=========

.. conda:recipe:: nonpareil
   :replaces_section_title:

   Estimate average coverage and create curves for metagenomic datasets

   :homepage: http://nonpareil.readthedocs.io/
   :developer docs: https://github.com/lmrodriguezr/nonpareil
   :license: Artistic License 2.0
   :recipe: /`nonpareil <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nonpareil>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nonpareil/meta.yaml>`_

   


.. conda:package:: nonpareil

   |downloads_nonpareil| |docker_nonpareil|

   :versions: 3.3.3-0, 3.3.1-0, 3.2-0, 3.1.1-0, 2.4.01-0, 2.4-0
   
   :depends r-base: >=3.4.1,<3.4.2.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nonpareil

   and update with::

      conda update nonpareil

   or use the docker container::

      docker pull quay.io/biocontainers/nonpareil:<tag>

   (see `nonpareil/tags`_ for valid values for ``<tag>``)


.. |downloads_nonpareil| image:: https://img.shields.io/conda/dn/bioconda/nonpareil.svg?style=flat
   :alt:   (downloads)
.. |docker_nonpareil| image:: https://quay.io/repository/biocontainers/nonpareil/status
   :target: https://quay.io/repository/biocontainers/nonpareil
.. _`nonpareil/tags`: https://quay.io/repository/biocontainers/nonpareil?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nonpareil/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nonpareil/README.html
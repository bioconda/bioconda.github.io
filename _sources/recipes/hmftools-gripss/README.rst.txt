:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmftools-gripss'
.. highlight: bash

hmftools-gripss
===============

.. conda:recipe:: hmftools-gripss
   :replaces_section_title:
   :noindex:

   GRIPSS applies a set of filtering and post processing steps on GRIDSS paired tumor\-normal output to produce a high confidence set of somatic SV for a tumor sample.

   :homepage: https://github.com/hartwigmedical/hmftools/tree/master/gripss
   :license: GPL / GPL-3.0-only
   :recipe: /`hmftools-gripss <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-gripss>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-gripss/meta.yaml>`_

   


.. conda:package:: hmftools-gripss

   |downloads_hmftools-gripss| |docker_hmftools-gripss|

   :versions:
      
      

      ``1.8-0``,  ``1.7-0``,  ``1.6-0``,  ``1.5-0``,  ``1.4-0``,  ``1.3-0``,  ``1.2-0``,  ``1.1-0``,  ``1.0-0``

      

   
   :depends openjdk: ``>=8``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hmftools-gripss

   and update with::

      conda update hmftools-gripss

   or use the docker container::

      docker pull quay.io/biocontainers/hmftools-gripss:<tag>

   (see `hmftools-gripss/tags`_ for valid values for ``<tag>``)


.. |downloads_hmftools-gripss| image:: https://img.shields.io/conda/dn/bioconda/hmftools-gripss.svg?style=flat
   :target: https://anaconda.org/bioconda/hmftools-gripss
   :alt:   (downloads)
.. |docker_hmftools-gripss| image:: https://quay.io/repository/biocontainers/hmftools-gripss/status
   :target: https://quay.io/repository/biocontainers/hmftools-gripss
.. _`hmftools-gripss/tags`: https://quay.io/repository/biocontainers/hmftools-gripss?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmftools-gripss/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmftools-gripss/README.html
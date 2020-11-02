:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'xmatchview'
.. highlight: bash

xmatchview
==========

.. conda:recipe:: xmatchview
   :replaces_section_title:
   :noindex:

   Genome sequence alignment visualization

   :homepage: http://www.bcgsc.ca/platform/bioinfo/software/xmatchview
   :documentation: https://github.com/bcgsc/xmatchview
   
   :license: GNU General Public License v3.0
   :recipe: /`xmatchview <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xmatchview>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xmatchview/meta.yaml>`_

   


.. conda:package:: xmatchview

   |downloads_xmatchview| |docker_xmatchview|

   :versions:
      
      

      ``1.2.5-0``,  ``1.2.4-0``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.1-0``,  ``v1.1.1-0``

      

   
   :depends minimap2: 
   :depends pillow: 
   :depends pip: 
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install xmatchview

   and update with::

      conda update xmatchview

   or use the docker container::

      docker pull quay.io/biocontainers/xmatchview:<tag>

   (see `xmatchview/tags`_ for valid values for ``<tag>``)


.. |downloads_xmatchview| image:: https://img.shields.io/conda/dn/bioconda/xmatchview.svg?style=flat
   :target: https://anaconda.org/bioconda/xmatchview
   :alt:   (downloads)
.. |docker_xmatchview| image:: https://quay.io/repository/biocontainers/xmatchview/status
   :target: https://quay.io/repository/biocontainers/xmatchview
.. _`xmatchview/tags`: https://quay.io/repository/biocontainers/xmatchview?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/xmatchview/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/xmatchview/README.html
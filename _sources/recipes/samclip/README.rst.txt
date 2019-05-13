:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'samclip'
.. highlight: bash

samclip
=======

.. conda:recipe:: samclip
   :replaces_section_title:

   Filter SAM file for soft and hard clipped alignments

   :homepage: https://github.com/tseemann/samclip
   :license: GPL-3.0
   :recipe: /`samclip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samclip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samclip/meta.yaml>`_

   


.. conda:package:: samclip

   |downloads_samclip| |docker_samclip|

   :versions: 0.2-1, 0.2-0
   
   :depends perl: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install samclip

   and update with::

      conda update samclip

   or use the docker container::

      docker pull quay.io/biocontainers/samclip:<tag>

   (see `samclip/tags`_ for valid values for ``<tag>``)


.. |downloads_samclip| image:: https://img.shields.io/conda/dn/bioconda/samclip.svg?style=flat
   :target: https://anaconda.org/bioconda/samclip
   :alt:   (downloads)
.. |docker_samclip| image:: https://quay.io/repository/biocontainers/samclip/status
   :target: https://quay.io/repository/biocontainers/samclip
.. _`samclip/tags`: https://quay.io/repository/biocontainers/samclip?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/samclip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/samclip/README.html
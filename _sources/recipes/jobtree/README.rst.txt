:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'jobtree'
.. highlight: bash

jobtree
=======

.. conda:recipe:: jobtree
   :replaces_section_title:

   Python based pipeline management software for clusters that makes running recursive and dynamically scheduled computations straightforward

   :homepage: https://github.com/benedictpaten/jobTree
   :license: MIT
   :recipe: /`jobtree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jobtree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jobtree/meta.yaml>`_

   


.. conda:package:: jobtree

   |downloads_jobtree| |docker_jobtree|

   :versions: 09.04.2017-2, 3.0.3-1
   
   :depends python: 2.7.*
   :depends sonlib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install jobtree

   and update with::

      conda update jobtree

   or use the docker container::

      docker pull quay.io/biocontainers/jobtree:<tag>

   (see `jobtree/tags`_ for valid values for ``<tag>``)


.. |downloads_jobtree| image:: https://img.shields.io/conda/dn/bioconda/jobtree.svg?style=flat
   :target: https://anaconda.org/bioconda/jobtree
   :alt:   (downloads)
.. |docker_jobtree| image:: https://quay.io/repository/biocontainers/jobtree/status
   :target: https://quay.io/repository/biocontainers/jobtree
.. _`jobtree/tags`: https://quay.io/repository/biocontainers/jobtree?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jobtree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jobtree/README.html
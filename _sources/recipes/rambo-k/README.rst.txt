:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rambo-k'
.. highlight: bash

rambo-k
=======

.. conda:recipe:: rambo-k
   :replaces_section_title:

   a reference\-based tool for rapid and sensitive extraction of one organism´s reads from a mixed NGS dataset

   :homepage: https://gitlab.com/SimonHTausch/RAMBO-K
   :license: GNU Lesser General Public License v3.0
   :recipe: /`rambo-k <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rambo-k>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rambo-k/meta.yaml>`_

   


.. conda:package:: rambo-k

   |downloads_rambo-k| |docker_rambo-k|

   :versions: 1.21-1, 1.21-0
   
   :depends argparse: 
   
   :depends matplotlib: 
   
   :depends numpy: 
   
   :depends openjdk: 
   
   :depends python: 
   
   :depends scikit-learn: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rambo-k

   and update with::

      conda update rambo-k

   or use the docker container::

      docker pull quay.io/repository/biocontainers/rambo-k:<tag>

   (see `rambo-k/tags`_ for valid values for ``<tag>``)


.. |downloads_rambo-k| image:: https://img.shields.io/conda/dn/bioconda/rambo-k.svg?style=flat
   :alt:   (downloads)
.. |docker_rambo-k| image:: https://quay.io/repository/biocontainers/rambo-k/status
   :target: https://quay.io/repository/biocontainers/rambo-k
.. _`rambo-k/tags`: https://quay.io/repository/biocontainers/rambo-k?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rambo-k/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rambo-k/README.html
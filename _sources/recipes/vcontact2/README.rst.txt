:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vcontact2'
.. highlight: bash

vcontact2
=========

.. conda:recipe:: vcontact2
   :replaces_section_title:
   :noindex:

   Viral Contig Automatic Clustering and Taxonomy

   :homepage: https://bitbucket.org/MAVERICLab/vcontact2
   :documentation: https://bitbucket.org/MAVERICLab/vcontact2/src/master/README.md
   
   :license: GPL / GPLv3
   :recipe: /`vcontact2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcontact2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcontact2/meta.yaml>`_

   


.. conda:package:: vcontact2

   |downloads_vcontact2| |docker_vcontact2|

   :versions:
      
      

      ``0.9.16-0``,  ``0.9.15-0``,  ``0.9.12-0``

      

   
   :depends biopython: ``>=1.68``
   :depends networkx: ``>=1.11``
   :depends pandas: ``>=0.21.0,<=0.25.3``
   :depends psutil: ``>=5.5.0``
   :depends pyparsing: ``>=2.4.2``
   :depends pytables: ``>=3.3.0``
   :depends python: ``>=3.7``
   :depends scikit-learn: ``>=0.18.1``
   :depends scipy: ``>=0.19.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install vcontact2

   and update with::

      conda update vcontact2

   or use the docker container::

      docker pull quay.io/biocontainers/vcontact2:<tag>

   (see `vcontact2/tags`_ for valid values for ``<tag>``)


.. |downloads_vcontact2| image:: https://img.shields.io/conda/dn/bioconda/vcontact2.svg?style=flat
   :target: https://anaconda.org/bioconda/vcontact2
   :alt:   (downloads)
.. |docker_vcontact2| image:: https://quay.io/repository/biocontainers/vcontact2/status
   :target: https://quay.io/repository/biocontainers/vcontact2
.. _`vcontact2/tags`: https://quay.io/repository/biocontainers/vcontact2?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vcontact2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vcontact2/README.html
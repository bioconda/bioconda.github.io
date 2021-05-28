:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'aptardi'
.. highlight: bash

aptardi
=======

.. conda:recipe:: aptardi
   :replaces_section_title:
   :noindex:

   aptardi is a tool that predicts polyA sites from RNA\-Seq data and DNA sequence

   :homepage: https://github.com/luskry/aptardi
   :license: MIT
   :recipe: /`aptardi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aptardi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aptardi/meta.yaml>`_

   


.. conda:package:: aptardi

   |downloads_aptardi| |docker_aptardi|

   :versions:
      
      

      ``1.4-0``

      

   
   :depends h5py: ``<=2.10.0``
   :depends numpy: ``<=1.19.5``
   :depends pandas: ``>=1.0.3``
   :depends python: ``>=3.7,<3.8``
   :depends scikit-learn: ``>=0.24``
   :depends tensorflow: ``2.0.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install aptardi

   and update with::

      conda update aptardi

   or use the docker container::

      docker pull quay.io/biocontainers/aptardi:<tag>

   (see `aptardi/tags`_ for valid values for ``<tag>``)


.. |downloads_aptardi| image:: https://img.shields.io/conda/dn/bioconda/aptardi.svg?style=flat
   :target: https://anaconda.org/bioconda/aptardi
   :alt:   (downloads)
.. |docker_aptardi| image:: https://quay.io/repository/biocontainers/aptardi/status
   :target: https://quay.io/repository/biocontainers/aptardi
.. _`aptardi/tags`: https://quay.io/repository/biocontainers/aptardi?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/aptardi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/aptardi/README.html
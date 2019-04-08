:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phylotoast'
.. highlight: bash

phylotoast
==========

.. conda:recipe:: phylotoast
   :replaces_section_title:

   Tools for phylogenetic data analysis including visualization and cluster\-computing support. 

   :homepage: https://github.com/smdabdoub/phylotoast
   :license: MIT
   :recipe: /`phylotoast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylotoast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylotoast/meta.yaml>`_

   


.. conda:package:: phylotoast

   |downloads_phylotoast| |docker_phylotoast|

   :versions: 1.4.0rc2-0, 1.3.0-1, 1.3.0-0
   
   :depends biom-format: >=2.1.5
   :depends biopython: >=1.60
   :depends h5py: 
   :depends matplotlib: <=1.5.3
   :depends numpy: 
   :depends palettable: 
   :depends pandas: 
   :depends python: 2.7*
   :depends scikit-bio: <=0.4.2
   :depends scikit-learn: 
   :depends scipy: 
   :depends statsmodels: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install phylotoast

   and update with::

      conda update phylotoast

   or use the docker container::

      docker pull quay.io/biocontainers/phylotoast:<tag>

   (see `phylotoast/tags`_ for valid values for ``<tag>``)


.. |downloads_phylotoast| image:: https://img.shields.io/conda/dn/bioconda/phylotoast.svg?style=flat
   :alt:   (downloads)
.. |docker_phylotoast| image:: https://quay.io/repository/biocontainers/phylotoast/status
   :target: https://quay.io/repository/biocontainers/phylotoast
.. _`phylotoast/tags`: https://quay.io/repository/biocontainers/phylotoast?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phylotoast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phylotoast/README.html
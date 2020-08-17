:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'coconet-binning'
.. highlight: bash

coconet-binning
===============

.. conda:recipe:: coconet-binning
   :replaces_section_title:
   :noindex:

   A contig binning tool from viral metagenomes

   :homepage: https://github.com/Puumanamana/CoCoNet
   :documentation: https://coconet.readthedocs.io/en/latest/
   
   :license: APACHE / Apache 2.0
   :recipe: /`coconet-binning <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coconet-binning>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coconet-binning/meta.yaml>`_

   


.. conda:package:: coconet-binning

   |downloads_coconet-binning| |docker_coconet-binning|

   :versions:
      
      

      ``0.54-0``,  ``0.52-0``

      

   
   :depends argparse: 
   :depends biopython: 
   :depends h5py: 
   :depends leidenalg: ``>=0.7.0``
   :depends numpy: 
   :depends pandas: ``>=1.0``
   :depends python: ``>=3.6``
   :depends python-igraph: ``>=0.7.1.post6``
   :depends pytorch: ``>=1.0``
   :depends pyyaml: ``5.1.0``
   :depends scikit-learn: 
   :depends tqdm: ``>=4.40.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install coconet-binning

   and update with::

      conda update coconet-binning

   or use the docker container::

      docker pull quay.io/biocontainers/coconet-binning:<tag>

   (see `coconet-binning/tags`_ for valid values for ``<tag>``)


.. |downloads_coconet-binning| image:: https://img.shields.io/conda/dn/bioconda/coconet-binning.svg?style=flat
   :target: https://anaconda.org/bioconda/coconet-binning
   :alt:   (downloads)
.. |docker_coconet-binning| image:: https://quay.io/repository/biocontainers/coconet-binning/status
   :target: https://quay.io/repository/biocontainers/coconet-binning
.. _`coconet-binning/tags`: https://quay.io/repository/biocontainers/coconet-binning?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/coconet-binning/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/coconet-binning/README.html
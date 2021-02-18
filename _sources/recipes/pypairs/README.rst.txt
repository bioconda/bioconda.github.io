:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pypairs'
.. highlight: bash

pypairs
=======

.. conda:recipe:: pypairs
   :replaces_section_title:
   :noindex:

   A python scRNA\-Seq classifier

   :homepage: https://github.com/rfechtner/pypairs
   :documentation: https://pypairs.readthedocs.io/
   
   :license: BSD / BSD
   :recipe: /`pypairs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pypairs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pypairs/meta.yaml>`_

   


.. conda:package:: pypairs

   |downloads_pypairs| |docker_pypairs|

   :versions:
      
      

      ``3.2.3-0``,  ``3.2.2-0``,  ``3.2-0``,  ``3.1.1-0``,  ``3.1.0-0``,  ``3.0.9-0``,  ``2.0.6-0``,  ``2.0.5-0``

      

   
   :depends anndata: ``>=0.6.13``
   :depends colorama: 
   :depends h5py: ``>=2.8.0``
   :depends numba: ``>=0.40.1``
   :depends numpy: ``>=1.15.4``
   :depends pandas: ``>=0.23.4``
   :depends psutil: 
   :depends python: ``>=3``
   :depends scikit-learn: 
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pypairs

   and update with::

      conda update pypairs

   or use the docker container::

      docker pull quay.io/biocontainers/pypairs:<tag>

   (see `pypairs/tags`_ for valid values for ``<tag>``)


.. |downloads_pypairs| image:: https://img.shields.io/conda/dn/bioconda/pypairs.svg?style=flat
   :target: https://anaconda.org/bioconda/pypairs
   :alt:   (downloads)
.. |docker_pypairs| image:: https://quay.io/repository/biocontainers/pypairs/status
   :target: https://quay.io/repository/biocontainers/pypairs
.. _`pypairs/tags`: https://quay.io/repository/biocontainers/pypairs?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pypairs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pypairs/README.html
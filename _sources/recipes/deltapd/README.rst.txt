:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deltapd'
.. highlight: bash

deltapd
=======

.. conda:recipe:: deltapd
   :replaces_section_title:
   :noindex:

   DeltaPD is a tool used to determine outliers in a gene tree when compared against a reference tree.

   :homepage: https://github.com/Ecogenomics/DeltaPD
   :license: AGPL / AGPL-3.0-only
   :recipe: /`deltapd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deltapd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deltapd/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.4107213`

   


.. conda:package:: deltapd

   |downloads_deltapd| |docker_deltapd|

   :versions:
      
      

      ``0.1.5-1``,  ``0.1.5-0``

      

   
   :depends dendropy: 
   :depends ete3: 
   :depends jinja2: 
   :depends libcxx: ``>=11.1.0``
   :depends matplotlib-base: 
   :depends numpy: ``>=1.17.5,<2.0a0``
   :depends phylodm: 
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python_abi: ``3.6.* *_cp36m``
   :depends seaborn: 
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install deltapd

   and update with::

      conda update deltapd

   or use the docker container::

      docker pull quay.io/biocontainers/deltapd:<tag>

   (see `deltapd/tags`_ for valid values for ``<tag>``)


.. |downloads_deltapd| image:: https://img.shields.io/conda/dn/bioconda/deltapd.svg?style=flat
   :target: https://anaconda.org/bioconda/deltapd
   :alt:   (downloads)
.. |docker_deltapd| image:: https://quay.io/repository/biocontainers/deltapd/status
   :target: https://quay.io/repository/biocontainers/deltapd
.. _`deltapd/tags`: https://quay.io/repository/biocontainers/deltapd?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deltapd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deltapd/README.html
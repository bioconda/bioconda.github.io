:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mango'
.. highlight: bash

mango
=====

.. conda:recipe:: mango
   :replaces_section_title:

   A scalable genomic visualization tool

   :homepage: https://github.com/bdgenomics/mango
   :documentation: https://bdg-mango.readthedocs.io/en/latest/
   
   :developer docs: https://github.com/bigdatagenomics/mango
   :license: Apache 2
   :recipe: /`mango <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mango>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mango/meta.yaml>`_

   


.. conda:package:: mango

   |downloads_mango| |docker_mango|

   :versions: 0.0.5-3, 0.0.5-2, 0.0.5-1, 0.0.5-0
   
   :depends cigar: 0.1.3
   :depends dask: 
   :depends distributed: 
   :depends ipykernel: >=5.1.2
   :depends ipython: 7.8.0
   :depends ipywidgets: 7.0.0
   :depends matplotlib: 2.0.2
   :depends openjdk: >=8,<9
   :depends pandas: 0.25.1
   :depends psutil: 
   :depends pyspark: 2.4.4
   :depends python: >3
   :depends traitlets: >=4.3.0,<5.0
   :depends traittypes: >=0.0.6
   :depends widgetsnbextension: >=3.5.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mango

   and update with::

      conda update mango

   or use the docker container::

      docker pull quay.io/biocontainers/mango:<tag>

   (see `mango/tags`_ for valid values for ``<tag>``)


.. |downloads_mango| image:: https://img.shields.io/conda/dn/bioconda/mango.svg?style=flat
   :target: https://anaconda.org/bioconda/mango
   :alt:   (downloads)
.. |docker_mango| image:: https://quay.io/repository/biocontainers/mango/status
   :target: https://quay.io/repository/biocontainers/mango
.. _`mango/tags`: https://quay.io/repository/biocontainers/mango?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mango/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mango/README.html
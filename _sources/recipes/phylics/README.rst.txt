:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phylics'
.. highlight: bash

phylics
=======

.. conda:recipe:: phylics
   :replaces_section_title:

   A tool to perform multi\-sample Phylogenetic analysis of Single Cell CNV profiles

   :homepage: https://github.com/bioinformatics-polito/PhyliCS
   :license: AGPLv3 / BSD 2-Clause
   :recipe: /`phylics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylics/meta.yaml>`_

   


.. conda:package:: phylics

   |downloads_phylics| |docker_phylics|

   :versions: 1.0.2-0, 1.0.1-0, 1.0.0-0
   
   :depends aioeasywebdav: 
   :depends boto3: 
   :depends dicttoxml: 
   :depends filechunkio: 
   :depends jupyter: 1.0.0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends matplotlib: 
   :depends numpy: 
   :depends pandas: 
   :depends patsy: 
   :depends plumbum: 
   :depends psutil: 
   :depends pygraphviz: 1.3.1
   :depends pysocks: 
   :depends python: >=3.6
   :depends python-irodsclient: 
   :depends scikit-learn: 0.21.3
   :depends scipy: 
   :depends sctools: 
   :depends seaborn: 0.9.0
   :depends statsmodels: 0.9.0
   :depends wheel: 0.33.6
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install phylics

   and update with::

      conda update phylics

   or use the docker container::

      docker pull quay.io/biocontainers/phylics:<tag>

   (see `phylics/tags`_ for valid values for ``<tag>``)


.. |downloads_phylics| image:: https://img.shields.io/conda/dn/bioconda/phylics.svg?style=flat
   :target: https://anaconda.org/bioconda/phylics
   :alt:   (downloads)
.. |docker_phylics| image:: https://quay.io/repository/biocontainers/phylics/status
   :target: https://quay.io/repository/biocontainers/phylics
.. _`phylics/tags`: https://quay.io/repository/biocontainers/phylics?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phylics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phylics/README.html
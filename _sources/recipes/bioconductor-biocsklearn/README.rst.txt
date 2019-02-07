.. title:: Package Recipe 'bioconductor-biocsklearn'
.. highlight: bash


bioconductor-biocsklearn
========================

.. conda:recipe:: bioconductor-biocsklearn
   :replaces_section_title:

   This package provides interfaces to selected sklearn elements\, and demonstrates fault tolerant use of python modules requiring extensive iteration.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/BiocSklearn.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-biocsklearn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocsklearn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocsklearn/meta.yaml>`_

   


.. conda:package:: bioconductor-biocsklearn

   |downloads_bioconductor-biocsklearn| |docker_bioconductor-biocsklearn|

   :versions: 1.4.0

   :depends: :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`h5py`  :conda:package:`pandas`  :conda:package:`python`  :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-bbmisc`  :conda:package:`r-knitr`  :conda:package:`r-reticulate`  :conda:package:`scikit-learn`  

   :required~by: |required_by_bioconductor-biocsklearn|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-biocsklearn

   and update with::

      conda update bioconductor-biocsklearn

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-biocsklearn


.. |required_by_bioconductor-biocsklearn| conda:required_by:: bioconductor-biocsklearn
.. |downloads_bioconductor-biocsklearn| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biocsklearn.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-biocsklearn| image:: https://quay.io/repository/biocontainers/bioconductor-biocsklearn/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biocsklearn







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biocsklearn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biocsklearn/README.html


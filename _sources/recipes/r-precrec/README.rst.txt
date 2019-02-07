.. title:: Package Recipe 'r-precrec'
.. highlight: bash


r-precrec
=========

.. conda:recipe:: r-precrec
   :replaces_section_title:

   

   :homepage: 
   :license: 
   :recipe: /`r-precrec <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-precrec>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-precrec/meta.yaml>`_

   


.. conda:package:: r-precrec

   |downloads_r-precrec| |docker_r-precrec|

   :versions: 0.9.1

   :depends: :conda:package:`r-assertthat` >=0.1 :conda:package:`r-base` 3.4.1* :conda:package:`r-data.table` >=1.10.4 :conda:package:`r-ggplot2` >=2.1.0 :conda:package:`r-gridextra` >=2.0.0 :conda:package:`r-rcpp`  

   :required~by: |required_by_r-precrec|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-precrec

   and update with::

      conda update r-precrec

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-precrec


.. |required_by_r-precrec| conda:required_by:: r-precrec
.. |downloads_r-precrec| image:: https://img.shields.io/conda/dn/bioconda/r-precrec.svg?style=flat
   :alt:   (downloads)
.. |docker_r-precrec| image:: https://quay.io/repository/biocontainers/r-precrec/status
   :target: https://quay.io/repository/biocontainers/r-precrec







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-precrec/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-precrec/README.html


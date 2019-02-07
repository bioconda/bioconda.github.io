.. title:: Package Recipe 'r-purbayes'
.. highlight: bash


r-purbayes
==========

.. conda:recipe:: r-purbayes
   :replaces_section_title:

   

   :homepage: 
   :license: 
   :recipe: /`r-purbayes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-purbayes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-purbayes/meta.yaml>`_

   


.. conda:package:: r-purbayes

   |downloads_r-purbayes| |docker_r-purbayes|

   :versions: 1.3

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-rjags`  

   :required~by: |required_by_r-purbayes|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-purbayes

   and update with::

      conda update r-purbayes

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-purbayes


.. |required_by_r-purbayes| conda:required_by:: r-purbayes
.. |downloads_r-purbayes| image:: https://img.shields.io/conda/dn/bioconda/r-purbayes.svg?style=flat
   :alt:   (downloads)
.. |docker_r-purbayes| image:: https://quay.io/repository/biocontainers/r-purbayes/status
   :target: https://quay.io/repository/biocontainers/r-purbayes







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-purbayes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-purbayes/README.html


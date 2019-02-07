.. title:: Package Recipe 'bioconductor-breastcancernki'
.. highlight: bash


bioconductor-breastcancernki
============================

.. conda:recipe:: bioconductor-breastcancernki
   :replaces_section_title:

   Genexpression data from a breast cancer study published by van\'t Veer et al. in 2002 and van de Vijver et al. in 2002\, provided as an eSet.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/breastCancerNKI.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-breastcancernki <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-breastcancernki>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-breastcancernki/meta.yaml>`_

   


.. conda:package:: bioconductor-breastcancernki

   |downloads_bioconductor-breastcancernki| |docker_bioconductor-breastcancernki|

   :versions: 1.20.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-breastcancernki|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-breastcancernki

   and update with::

      conda update bioconductor-breastcancernki

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-breastcancernki


.. |required_by_bioconductor-breastcancernki| conda:required_by:: bioconductor-breastcancernki
.. |downloads_bioconductor-breastcancernki| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-breastcancernki.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-breastcancernki| image:: https://quay.io/repository/biocontainers/bioconductor-breastcancernki/status
   :target: https://quay.io/repository/biocontainers/bioconductor-breastcancernki







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-breastcancernki/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-breastcancernki/README.html


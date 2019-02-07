.. title:: Package Recipe 'bioconductor-survcomp'
.. highlight: bash


bioconductor-survcomp
=====================

.. conda:recipe:: bioconductor-survcomp
   :replaces_section_title:

   Assessment and Comparison for Performance of Risk Prediction \(Survival\) Models.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/survcomp.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-survcomp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-survcomp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-survcomp/meta.yaml>`_
   :links: biotools: :biotools:`survcomp`

   


.. conda:package:: bioconductor-survcomp

   |downloads_bioconductor-survcomp| |docker_bioconductor-survcomp|

   :versions: 1.32.0, 1.30.0, 1.28.4

   :depends: :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`libstdcxx-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-bootstrap`  :conda:package:`r-ipred`  :conda:package:`r-kernsmooth`  :conda:package:`r-prodlim`  :conda:package:`r-rmeta`  :conda:package:`r-suppdists`  :conda:package:`r-survival`  :conda:package:`r-survivalroc`  

   :required~by: |required_by_bioconductor-survcomp|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-survcomp

   and update with::

      conda update bioconductor-survcomp

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-survcomp


.. |required_by_bioconductor-survcomp| conda:required_by:: bioconductor-survcomp
.. |downloads_bioconductor-survcomp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-survcomp.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-survcomp| image:: https://quay.io/repository/biocontainers/bioconductor-survcomp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-survcomp







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-survcomp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-survcomp/README.html


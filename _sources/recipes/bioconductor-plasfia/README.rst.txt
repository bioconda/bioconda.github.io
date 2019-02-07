.. title:: Package Recipe 'bioconductor-plasfia'
.. highlight: bash


bioconductor-plasfia
====================

.. conda:recipe:: bioconductor-plasfia
   :replaces_section_title:

   Positive Ionization FIA\-HRMS data of human plasma spiked with a pool of 40 compounds acquired in FIA\-HRMS mode on an orbitrap fusion. plasFIA also include the result of the processing by the proFIA package with adapted parameters for an Orbitrap Fusion.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/plasFIA.html
   :license: LGPL
   :recipe: /`bioconductor-plasfia <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-plasfia>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-plasfia/meta.yaml>`_

   


.. conda:package:: bioconductor-plasfia

   |downloads_bioconductor-plasfia| |docker_bioconductor-plasfia|

   :versions: 1.10.0

   :depends: :conda:package:`bioconductor-profia` >=1.8.0,<1.9.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-plasfia|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-plasfia

   and update with::

      conda update bioconductor-plasfia

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-plasfia


.. |required_by_bioconductor-plasfia| conda:required_by:: bioconductor-plasfia
.. |downloads_bioconductor-plasfia| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-plasfia.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-plasfia| image:: https://quay.io/repository/biocontainers/bioconductor-plasfia/status
   :target: https://quay.io/repository/biocontainers/bioconductor-plasfia







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-plasfia/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-plasfia/README.html


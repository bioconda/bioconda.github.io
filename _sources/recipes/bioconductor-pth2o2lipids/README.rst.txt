:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pth2o2lipids'
.. highlight: bash

bioconductor-pth2o2lipids
=========================

.. conda:recipe:: bioconductor-pth2o2lipids
   :replaces_section_title:

   P. tricornutum HPLC\-ESI\-MS Lipid Data from van Creveld et al. \(2015\)

   :homepage: https://bioconductor.org/packages/3.10/data/experiment/html/PtH2O2lipids.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-pth2o2lipids <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pth2o2lipids>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pth2o2lipids/meta.yaml>`_

   Annotated HPLC\-ESI\-MS lipid data in positive ionization mode from an experiment in which cultures of the marine diatom Phaeodactylum tricornutum were treated with various concentrations of hydrogen peroxide \(H2O2\) to induce oxidative stress. The experiment is described in Graff van Creveld\, et al.\, 2015\, \"Early perturbation in mitochondria redox homeostasis in response to environmental stress predicts cell fate in diatoms\,\" ISME Journal 9\:385\-395. PtH2O2lipids consists of two objects\: A CAMERA xsAnnotate object \(ptH2O2lipids\$xsAnnotate\) and LOBSTAHS LOBSet object \(ptH2O2lipids\$xsAnnotate\$LOBSet\). The LOBSet includes putative compound assignments from the default LOBSTAHS database. Isomer annotation is recorded in three other LOBSet slots.


.. conda:package:: bioconductor-pth2o2lipids

   |downloads_bioconductor-pth2o2lipids| |docker_bioconductor-pth2o2lipids|

   :versions: 1.14.0-0, 1.12.0-0, 1.10.0-1, 1.8.0-0
   
   :depends bioconductor-camera: >=1.44.0,<1.45.0
   :depends bioconductor-lobstahs: >=1.14.0,<1.15.0
   :depends bioconductor-xcms: >=3.10.0,<3.11.0
   :depends curl: >=7.69.1,<8.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pth2o2lipids

   and update with::

      conda update bioconductor-pth2o2lipids

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pth2o2lipids:<tag>

   (see `bioconductor-pth2o2lipids/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pth2o2lipids| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pth2o2lipids.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pth2o2lipids
   :alt:   (downloads)
.. |docker_bioconductor-pth2o2lipids| image:: https://quay.io/repository/biocontainers/bioconductor-pth2o2lipids/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pth2o2lipids
.. _`bioconductor-pth2o2lipids/tags`: https://quay.io/repository/biocontainers/bioconductor-pth2o2lipids?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pth2o2lipids/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pth2o2lipids/README.html
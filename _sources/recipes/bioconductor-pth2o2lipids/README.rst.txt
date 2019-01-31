.. _`bioconductor-pth2o2lipids`:

bioconductor-pth2o2lipids
=========================

|downloads|

Annotated HPLC\-ESI\-MS lipid data in positive ionization mode from an experiment in which cultures of the marine diatom Phaeodactylum tricornutum were treated with various concentrations of hydrogen peroxide \(H2O2\) to induce oxidative stress. The experiment is described in Graff van Creveld\, et al.\, 2015\, \"Early perturbation in mitochondria redox homeostasis in response to environmental stress predicts cell fate in diatoms\,\" ISME Journal 9\:385\-395. PtH2O2lipids consists of two objects\: A CAMERA xsAnnotate object \(ptH2O2lipids\$xsAnnotate\) and LOBSTAHS LOBSet object \(ptH2O2lipids\$xsAnnotate\$LOBSet\). The LOBSet includes putative compound assignments from the default LOBSTAHS database. Isomer annotation is recorded in three other LOBSet slots.

============= ===========
Home          https://bioconductor.org/packages/3.8/data/experiment/html/PtH2O2lipids.html
Versions      
License       MIT + file LICENSE
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-pth2o2lipids/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-pth2o2lipids

and update with::

   conda update bioconductor-pth2o2lipids



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-pth2o2lipids.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-pth2o2lipids/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-pth2o2lipids/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-pth2o2lipids/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-pth2o2lipids
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-pth2o2lipids/status
                :target: https://quay.io/repository/biocontainers/bioconductor-pth2o2lipids


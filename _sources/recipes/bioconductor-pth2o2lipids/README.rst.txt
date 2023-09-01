:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pth2o2lipids'
.. highlight: bash

bioconductor-pth2o2lipids
=========================

.. conda:recipe:: bioconductor-pth2o2lipids
   :replaces_section_title:
   :noindex:

   P. tricornutum HPLC\-ESI\-MS Lipid Data from van Creveld et al. \(2015\)

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/PtH2O2lipids.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-pth2o2lipids <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pth2o2lipids>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pth2o2lipids/meta.yaml>`_

   Annotated HPLC\-ESI\-MS lipid data in positive ionization mode from an experiment in which cultures of the marine diatom Phaeodactylum tricornutum were treated with various concentrations of hydrogen peroxide \(H2O2\) to induce oxidative stress. The experiment is described in Graff van Creveld\, et al.\, 2015\, \"Early perturbation in mitochondria redox homeostasis in response to environmental stress predicts cell fate in diatoms\,\" ISME Journal 9\:385\-395. PtH2O2lipids consists of two objects\: A CAMERA xsAnnotate object \(ptH2O2lipids\$xsAnnotate\) and LOBSTAHS LOBSet object \(ptH2O2lipids\$xsAnnotate\$LOBSet\). The LOBSet includes putative compound assignments from the default LOBSTAHS database. Isomer annotation is recorded in three other LOBSet slots.


.. conda:package:: bioconductor-pth2o2lipids

   |downloads_bioconductor-pth2o2lipids| |docker_bioconductor-pth2o2lipids|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.24.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-camera: ``>=1.56.0,<1.57.0``
   :depends bioconductor-data-packages: ``>=20230706``
   :depends bioconductor-lobstahs: ``>=1.26.0,<1.27.0``
   :depends bioconductor-xcms: ``>=3.22.0,<3.23.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-pth2o2lipids

   and update with::

      mamba update bioconductor-pth2o2lipids

  To create a new environment, run::

      mamba create --name myenvname bioconductor-pth2o2lipids

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pth2o2lipids:<tag>

   (see `bioconductor-pth2o2lipids/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pth2o2lipids| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pth2o2lipids.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pth2o2lipids
   :alt:   (downloads)
.. |docker_bioconductor-pth2o2lipids| image:: https://quay.io/repository/biocontainers/bioconductor-pth2o2lipids/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pth2o2lipids
.. _`bioconductor-pth2o2lipids/tags`: https://quay.io/repository/biocontainers/bioconductor-pth2o2lipids?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pth2o2lipids";
        var versions = ["1.26.0","1.24.0","1.20.0","1.20.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pth2o2lipids/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pth2o2lipids/README.html
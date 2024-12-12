:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-disprose'
.. highlight: bash

r-disprose
==========

.. conda:recipe:: r-disprose
   :replaces_section_title:
   :noindex:

   Set of tools for molecular probes selection and design of a microarray\, e.g. the assessment of physical and chemical properties\, blast performance\, selection according to sensitivity and selectivity. Methods used in package are described in\: Lorenz R.\, Stephan H.B.\, Höner zu Siederdissen C. et al. \(2011\) \<doi\:10.1186\/1748\-7188\-6\-26\>\; Camacho C.\, Coulouris G.\, Avagyan V. et al. \(2009\) \<doi\:10.1186\/1471\-2105\-10\-421\>.

   :homepage: https://CRAN.R-project.org/package=disprose
   :license: GPL3 / GPL-3.0-only
   :recipe: /`r-disprose <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-disprose>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-disprose/meta.yaml>`_

   


.. conda:package:: r-disprose

   |downloads_r-disprose| |docker_r-disprose|

   :versions:
      
      

      ``0.1.6-3``,  ``0.1.6-2``,  ``0.1.6-1``,  ``0.1.6-0``

      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install r-disprose

   and update with::

      mamba update r-disprose

  To create a new environment, run::

      mamba create --name myenvname r-disprose

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-disprose:<tag>

   (see `r-disprose/tags`_ for valid values for ``<tag>``)


.. |downloads_r-disprose| image:: https://img.shields.io/conda/dn/bioconda/r-disprose.svg?style=flat
   :target: https://anaconda.org/bioconda/r-disprose
   :alt:   (downloads)
.. |docker_r-disprose| image:: https://quay.io/repository/biocontainers/r-disprose/status
   :target: https://quay.io/repository/biocontainers/r-disprose
.. _`r-disprose/tags`: https://quay.io/repository/biocontainers/r-disprose?tab=tags


.. raw:: html

    <script>
        var package = "r-disprose";
        var versions = ["0.1.6","0.1.6","0.1.6","0.1.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-disprose/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-disprose/README.html
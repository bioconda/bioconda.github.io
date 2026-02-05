:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-informeasure'
.. highlight: bash

bioconductor-informeasure
=========================

.. conda:recipe:: bioconductor-informeasure
   :replaces_section_title:
   :noindex:

   R implementation of information measures

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/Informeasure.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-informeasure <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-informeasure>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-informeasure/meta.yaml>`_

   This package consolidates a comprehensive set of information measurements\, encompassing mutual information\, conditional mutual information\, interaction information\, partial information decomposition\, and part mutual information.


.. conda:package:: bioconductor-informeasure

   |downloads_bioconductor-informeasure| |docker_bioconductor-informeasure|

   :versions:
      
      

      ``1.20.0-0``,  ``1.16.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends r-base: ``>=4.5,<4.6.0a0``
   :depends r-entropy: 
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

      mamba install bioconductor-informeasure

   and update with::

      mamba update bioconductor-informeasure

  To create a new environment, run::

      mamba create --name myenvname bioconductor-informeasure

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-informeasure:<tag>

   (see `bioconductor-informeasure/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-informeasure| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-informeasure.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-informeasure
   :alt:   (downloads)
.. |docker_bioconductor-informeasure| image:: https://quay.io/repository/biocontainers/bioconductor-informeasure/status
   :target: https://quay.io/repository/biocontainers/bioconductor-informeasure
.. _`bioconductor-informeasure/tags`: https://quay.io/repository/biocontainers/bioconductor-informeasure?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-informeasure";
        var versions = ["1.20.0","1.16.0","1.10.0","1.8.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-informeasure/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-informeasure/README.html
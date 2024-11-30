:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mapscape'
.. highlight: bash

bioconductor-mapscape
=====================

.. conda:recipe:: bioconductor-mapscape
   :replaces_section_title:
   :noindex:

   mapscape

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/mapscape.html
   :license: GPL-3
   :recipe: /`bioconductor-mapscape <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mapscape>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mapscape/meta.yaml>`_

   MapScape integrates clonal prevalence\, clonal hierarchy\, anatomic and mutational information to provide interactive visualization of spatial clonal evolution. There are four inputs to MapScape\: \(i\) the clonal phylogeny\, \(ii\) clonal prevalences\, \(iii\) an image reference\, which may be a medical image or drawing and \(iv\) pixel locations for each sample on the referenced image. Optionally\, MapScape can accept a data table of mutations for each clone and their variant allele frequencies in each sample. The output of MapScape consists of a cropped anatomical image surrounded by two representations of each tumour sample. The first\, a cellular aggregate\, visually displays the prevalence of each clone. The second shows a skeleton of the clonal phylogeny while highlighting only those clones present in the sample. Together\, these representations enable the analyst to visualize the distribution of clones throughout anatomic space.


.. conda:package:: bioconductor-mapscape

   |downloads_bioconductor-mapscape| |docker_bioconductor-mapscape|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-base64enc: ``>=0.1-3``
   :depends r-htmlwidgets: ``>=0.5``
   :depends r-jsonlite: ``>=0.9.19``
   :depends r-stringr: ``>=1.0.0``
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

      mamba install bioconductor-mapscape

   and update with::

      mamba update bioconductor-mapscape

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mapscape

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mapscape:<tag>

   (see `bioconductor-mapscape/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mapscape| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mapscape.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mapscape
   :alt:   (downloads)
.. |docker_bioconductor-mapscape| image:: https://quay.io/repository/biocontainers/bioconductor-mapscape/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mapscape
.. _`bioconductor-mapscape/tags`: https://quay.io/repository/biocontainers/bioconductor-mapscape?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mapscape";
        var versions = ["1.26.0","1.24.0","1.22.0","1.18.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mapscape/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mapscape/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-osat'
.. highlight: bash

bioconductor-osat
=================

.. conda:recipe:: bioconductor-osat
   :replaces_section_title:
   :noindex:

   OSAT\: Optimal Sample Assignment Tool

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/OSAT.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-osat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-osat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-osat/meta.yaml>`_
   :links: biotools: :biotools:`osat`, doi: :doi:`10.1186/1471-2164-13-689`

   A sizable genomics study such as microarray often involves the use of multiple batches \(groups\) of experiment due to practical complication. To minimize batch effects\, a careful experiment design should ensure the even distribution of biological groups and confounding factors across batches. OSAT \(Optimal Sample Assignment Tool\) is developed to facilitate the allocation of collected samples to different batches. With minimum steps\, it produces setup that optimizes the even distribution of samples in groups of biological interest into different batches\, reducing the confounding or correlation between batches and the biological variables of interest. It can also optimize the even distribution of confounding factors across batches. Our tool can handle challenging instances where incomplete and unbalanced sample collections are involved as well as ideal balanced RCBD. OSAT provides a number of predefined layout for some of the most commonly used genomics platform. Related paper can be find at http\:\/\/www.biomedcentral.com\/1471\-2164\/13\/689 .


.. conda:package:: bioconductor-osat

   |downloads_bioconductor-osat| |docker_bioconductor-osat|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.50.0-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-1</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  </span></summary>
      

      ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-1``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-osat

   and update with::

      mamba update bioconductor-osat

  To create a new environment, run::

      mamba create --name myenvname bioconductor-osat

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-osat:<tag>

   (see `bioconductor-osat/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-osat| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-osat.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-osat
   :alt:   (downloads)
.. |docker_bioconductor-osat| image:: https://quay.io/repository/biocontainers/bioconductor-osat/status
   :target: https://quay.io/repository/biocontainers/bioconductor-osat
.. _`bioconductor-osat/tags`: https://quay.io/repository/biocontainers/bioconductor-osat?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-osat";
        var versions = ["1.50.0","1.48.0","1.46.0","1.42.0","1.40.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-osat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-osat/README.html
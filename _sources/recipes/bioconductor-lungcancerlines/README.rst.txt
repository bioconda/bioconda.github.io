:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lungcancerlines'
.. highlight: bash

bioconductor-lungcancerlines
============================

.. conda:recipe:: bioconductor-lungcancerlines
   :replaces_section_title:
   :noindex:

   Reads from Two Lung Cancer Cell Lines

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/LungCancerLines.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-lungcancerlines <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lungcancerlines>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lungcancerlines/meta.yaml>`_

   Reads from an RNA\-seq experiment between two lung cancer cell lines\: H1993 \(met\) and H2073 \(primary\). The reads are stored as Fastq files and are meant for use with the TP53Genome object in the gmapR package.


.. conda:package:: bioconductor-lungcancerlines

   |downloads_bioconductor-lungcancerlines| |docker_bioconductor-lungcancerlines|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.44.0-0</code>,  <code>0.40.0-0</code>,  <code>0.38.0-0</code>,  <code>0.36.0-0</code>,  <code>0.32.0-1</code>,  <code>0.32.0-0</code>,  <code>0.30.0-0</code>,  <code>0.28.0-1</code>,  <code>0.28.0-0</code>,  </span></summary>
      

      ``0.44.0-0``,  ``0.40.0-0``,  ``0.38.0-0``,  ``0.36.0-0``,  ``0.32.0-1``,  ``0.32.0-0``,  ``0.30.0-0``,  ``0.28.0-1``,  ``0.28.0-0``,  ``0.26.0-0``,  ``0.24.0-0``,  ``0.22.0-1``,  ``0.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20241103``
   :depends bioconductor-rsamtools: ``>=2.22.0,<2.23.0``
   :depends curl: 
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

      mamba install bioconductor-lungcancerlines

   and update with::

      mamba update bioconductor-lungcancerlines

  To create a new environment, run::

      mamba create --name myenvname bioconductor-lungcancerlines

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-lungcancerlines:<tag>

   (see `bioconductor-lungcancerlines/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-lungcancerlines| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lungcancerlines.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-lungcancerlines
   :alt:   (downloads)
.. |docker_bioconductor-lungcancerlines| image:: https://quay.io/repository/biocontainers/bioconductor-lungcancerlines/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lungcancerlines
.. _`bioconductor-lungcancerlines/tags`: https://quay.io/repository/biocontainers/bioconductor-lungcancerlines?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-lungcancerlines";
        var versions = ["0.44.0","0.40.0","0.38.0","0.36.0","0.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lungcancerlines/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lungcancerlines/README.html
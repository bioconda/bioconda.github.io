:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hopla'
.. highlight: bash

hopla
=====

.. conda:recipe:: hopla
   :replaces_section_title:
   :noindex:

   Hopla enables classic genomic single\, duo\, trio\, etc.\, analysis\, by studying a single \(multisample\) vcf\-file

   :homepage: https://github.com/CenterForMedicalGeneticsGhent/Hopla
   :license: MIT / MIT
   :recipe: /`hopla <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hopla>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hopla/meta.yaml>`_

   


.. conda:package:: hopla

   |downloads_hopla| |docker_hopla|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.1-1</code>,  <code>1.2.1-0</code>,  <code>1.2.0-0</code>,  <code>1.0.6-0</code>,  <code>1.0.5-0</code>,  <code>1.0.4-0</code>,  <code>1.0.3-0</code>,  <code>1.0.0-0</code>,  <code>0.3.4-0</code>,  </span></summary>
      

      ``1.2.1-1``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.0-0``,  ``0.3.4-0``,  ``0.3.3-0``,  ``0.3.1-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.2-1``,  ``0.1.2-0``,  ``0.1.1-1``,  ``0.1.1-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-dnacopy: ``>=1.64.0``
   :depends bioconductor-genomicranges: ``>=1.42.0``
   :depends merlin: ``1.1.2.*``
   :depends pandoc: ``>=3.1.5``
   :depends r-base: 
   :depends r-data.table: ``>=1.13.2``
   :depends r-htmltools: ``>=0.5.0``
   :depends r-kinship2: ``>=1.8.5``
   :depends r-knitr: ``>=1.29``
   :depends r-plotly: ``>=4.9.2.1``
   :depends r-rcolorbrewer: ``>=1.1_2``
   :depends r-vcfr: ``>=1.12.0``
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

      mamba install hopla

   and update with::

      mamba update hopla

  To create a new environment, run::

      mamba create --name myenvname hopla

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hopla:<tag>

   (see `hopla/tags`_ for valid values for ``<tag>``)


.. |downloads_hopla| image:: https://img.shields.io/conda/dn/bioconda/hopla.svg?style=flat
   :target: https://anaconda.org/bioconda/hopla
   :alt:   (downloads)
.. |docker_hopla| image:: https://quay.io/repository/biocontainers/hopla/status
   :target: https://quay.io/repository/biocontainers/hopla
.. _`hopla/tags`: https://quay.io/repository/biocontainers/hopla?tab=tags


.. raw:: html

    <script>
        var package = "hopla";
        var versions = ["1.2.1","1.2.1","1.2.0","1.0.6","1.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hopla/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hopla/README.html
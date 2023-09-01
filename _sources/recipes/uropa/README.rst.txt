:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'uropa'
.. highlight: bash

uropa
=====

.. conda:recipe:: uropa
   :replaces_section_title:
   :noindex:

   UROPA \(Universal RObust Peak Annotator\) is a command line based tool\, intended for genomic region annotation from e.g. peak calling.
   It detects the most appropriate annotation by taking parameters such as feature type\, anchor\, direction and strand into account.
   Furthermore\, it allows filtering for GTF attribute values\, e.g. protein\_coding.


   :homepage: https://github.com/loosolab/UROPA
   :documentation: http://uropa-manual.readthedocs.io
   
   :license: MIT / MIT
   :recipe: /`uropa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/uropa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/uropa/meta.yaml>`_

   


.. conda:package:: uropa

   |downloads_uropa| |docker_uropa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.0.2-0</code>,  <code>4.0.1-0</code>,  <code>4.0.0-0</code>,  <code>3.5.3-0</code>,  <code>3.5.2-0</code>,  <code>3.5.0-0</code>,  <code>3.4.0-0</code>,  <code>3.3.4-0</code>,  <code>3.3.3-0</code>,  </span></summary>
      

      ``4.0.2-0``,  ``4.0.1-0``,  ``4.0.0-0``,  ``3.5.3-0``,  ``3.5.2-0``,  ``3.5.0-0``,  ``3.4.0-0``,  ``3.3.4-0``,  ``3.3.3-0``,  ``3.3.2-0``,  ``3.3.0-0``,  ``3.2.0-0``,  ``3.1.0-0``,  ``3.0.0-0``,  ``2.0.3-0``,  ``2.0.2a0-2``,  ``2.0.2a0-0``,  ``2.0.0a0-0``,  ``1.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-graph: 
   :depends bioconductor-rbgl: 
   :depends numpy: 
   :depends psutil: 
   :depends pysam: ``>=0.15.3``
   :depends python: ``>=3.6``
   :depends r-base: 
   :depends r-getopt: 
   :depends r-ggplot2: 
   :depends r-gplots: 
   :depends r-gridextra: 
   :depends r-jsonlite: 
   :depends r-tidyr: 
   :depends r-upsetr: 
   :depends r-venndiagram: 
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

      mamba install uropa

   and update with::

      mamba update uropa

  To create a new environment, run::

      mamba create --name myenvname uropa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/uropa:<tag>

   (see `uropa/tags`_ for valid values for ``<tag>``)


.. |downloads_uropa| image:: https://img.shields.io/conda/dn/bioconda/uropa.svg?style=flat
   :target: https://anaconda.org/bioconda/uropa
   :alt:   (downloads)
.. |docker_uropa| image:: https://quay.io/repository/biocontainers/uropa/status
   :target: https://quay.io/repository/biocontainers/uropa
.. _`uropa/tags`: https://quay.io/repository/biocontainers/uropa?tab=tags


.. raw:: html

    <script>
        var package = "uropa";
        var versions = ["4.0.2","4.0.1","4.0.0","3.5.3","3.5.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/uropa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/uropa/README.html
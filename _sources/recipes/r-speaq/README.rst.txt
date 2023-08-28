:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-speaq'
.. highlight: bash

r-speaq
=======

.. conda:recipe:: r-speaq
   :replaces_section_title:
   :noindex:

   Makes Nuclear Magnetic Resonance spectroscopy \(NMR spectroscopy\) data analysis as easy as possible by only requiring a small set of functions to perform an entire analysis. \'speaq\' offers the possibility of raw spectra alignment and quantitation but also an analysis based on features whereby the spectra are converted to peaks which are then grouped and turned into features. These features can be processed with any number of statistical tools either included in \'speaq\' or available elsewhere on CRAN. More detail can be found in Vu et al. \(2011\) \<doi\:10.1186\/1471\-2105\-12\-405\> and Beirnaert et al. \(2018\) \<doi\:10.1371\/journal.pcbi.1006018\>. 

   :homepage: https://CRAN.R-project.org/package=speaq
   :license: APACHE / Apache-2.0
   :recipe: /`r-speaq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-speaq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-speaq/meta.yaml>`_

   


.. conda:package:: r-speaq

   |downloads_r-speaq| |docker_r-speaq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.7.0-2</code>,  <code>2.7.0-1</code>,  <code>2.7.0-0</code>,  <code>2.6.1-3</code>,  <code>2.6.1-2</code>,  <code>2.6.1-1</code>,  <code>2.6.1-0</code>,  <code>2.6.0-0</code>,  <code>2.3.3-1</code>,  </span></summary>
      

      ``2.7.0-2``,  ``2.7.0-1``,  ``2.7.0-0``,  ``2.6.1-3``,  ``2.6.1-2``,  ``2.6.1-1``,  ``2.6.1-0``,  ``2.6.0-0``,  ``2.3.3-1``,  ``2.3.3-0``,  ``2.1.0-0``,  ``1.2.3-0``,  ``1.2.1-1``,  ``1.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-impute: 
   :depends bioconductor-massspecwavelet: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cluster: 
   :depends r-data.table: 
   :depends r-dosnow: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-missforest: 
   :depends r-reshape2: 
   :depends r-rfast: 
   :depends r-rvest: 
   :depends r-xml2: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install r-speaq

   and update with::

      mamba update r-speaq

  To create a new environment, run::

      mamba create --name myenvname r-speaq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-speaq:<tag>

   (see `r-speaq/tags`_ for valid values for ``<tag>``)


.. |downloads_r-speaq| image:: https://img.shields.io/conda/dn/bioconda/r-speaq.svg?style=flat
   :target: https://anaconda.org/bioconda/r-speaq
   :alt:   (downloads)
.. |docker_r-speaq| image:: https://quay.io/repository/biocontainers/r-speaq/status
   :target: https://quay.io/repository/biocontainers/r-speaq
.. _`r-speaq/tags`: https://quay.io/repository/biocontainers/r-speaq?tab=tags


.. raw:: html

    <script>
        var package = "r-speaq";
        var versions = ["2.7.0","2.7.0","2.7.0","2.6.1","2.6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-speaq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-speaq/README.html
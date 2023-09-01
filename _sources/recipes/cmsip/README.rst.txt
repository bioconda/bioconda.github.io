:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cmsip'
.. highlight: bash

cmsip
=====

.. conda:recipe:: cmsip
   :replaces_section_title:
   :noindex:

   A package for detecting differential 5hmC regions from CMS\-IP sequencing data.

   :homepage: https://github.com/lijinbio/cmsip
   :license: MIT / MIT
   :recipe: /`cmsip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cmsip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cmsip/meta.yaml>`_

   


.. conda:package:: cmsip

   |downloads_cmsip| |docker_cmsip|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.0.3.0-0</code>,  <code>0.0.2.9-0</code>,  <code>0.0.2.8-1</code>,  <code>0.0.2.8-0</code>,  <code>0.0.2.6-0</code>,  <code>0.0.2.3-0</code>,  <code>0.0.2.1-1</code>,  <code>0.0.2.1-0</code>,  <code>0.0.2.0-0</code>,  </span></summary>
      

      ``0.0.3.0-0``,  ``0.0.2.9-0``,  ``0.0.2.8-1``,  ``0.0.2.8-0``,  ``0.0.2.6-0``,  ``0.0.2.3-0``,  ``0.0.2.1-1``,  ``0.0.2.1-0``,  ``0.0.2.0-0``,  ``0.0.1.8-0``,  ``0.0.1.7-0``,  ``0.0.1.4-1``,  ``0.0.1.4-0``,  ``0.0.1.3-0``,  ``0.0.1.2-0``,  ``0.0.1.1.9-0``,  ``0.0.1.1.1-0``,  ``0.0.0.9-0``,  ``0.0.0.6-0``,  ``0.0.0.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends bedtools: 
   :depends bioconductor-deseq2: 
   :depends bioconductor-genefilter: 
   :depends gawk: 
   :depends matplotlib-base: 
   :depends moabs: 
   :depends python: ``>=3``
   :depends pyyaml: 
   :depends r-base: 
   :depends r-desctools: 
   :depends ucsc-fetchchromsizes: 
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

      mamba install cmsip

   and update with::

      mamba update cmsip

  To create a new environment, run::

      mamba create --name myenvname cmsip

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cmsip:<tag>

   (see `cmsip/tags`_ for valid values for ``<tag>``)


.. |downloads_cmsip| image:: https://img.shields.io/conda/dn/bioconda/cmsip.svg?style=flat
   :target: https://anaconda.org/bioconda/cmsip
   :alt:   (downloads)
.. |docker_cmsip| image:: https://quay.io/repository/biocontainers/cmsip/status
   :target: https://quay.io/repository/biocontainers/cmsip
.. _`cmsip/tags`: https://quay.io/repository/biocontainers/cmsip?tab=tags


.. raw:: html

    <script>
        var package = "cmsip";
        var versions = ["0.0.3.0","0.0.2.9","0.0.2.8","0.0.2.8","0.0.2.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cmsip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cmsip/README.html
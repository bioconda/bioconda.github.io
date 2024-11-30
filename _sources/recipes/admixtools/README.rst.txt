:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'admixtools'
.. highlight: bash

admixtools
==========

.. conda:recipe:: admixtools
   :replaces_section_title:
   :noindex:

   ADMIXTOOLS \(Patterson et al. 2012\) is a software package that supports formal tests of whether admixture occurred\, and makes it possible to infer admixture proportions and dates.

   :homepage: https://github.com/DReichLab/AdmixTools
   :license: Free for Academic Use
   :recipe: /`admixtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/admixtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/admixtools/meta.yaml>`_
   :links: biotools: :biotools:`AdmixTools`, doi: :doi:`10.1534/genetics.112.145037`

   


.. conda:package:: admixtools

   |downloads_admixtools| |docker_admixtools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>7.0.2-4</code>,  <code>7.0.2-3</code>,  <code>7.0.2-2</code>,  <code>7.0.2-1</code>,  <code>7.0.2-0</code>,  <code>7.0.1-1</code>,  <code>7.0.1-0</code>,  <code>6.0-2</code>,  <code>6.0-1</code>,  </span></summary>
      

      ``7.0.2-4``,  ``7.0.2-3``,  ``7.0.2-2``,  ``7.0.2-1``,  ``7.0.2-0``,  ``7.0.1-1``,  ``7.0.1-0``,  ``6.0-2``,  ``6.0-1``,  ``6.0-0``,  ``5.1-0``,  ``5.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends libgcc-ng: ``>=12``
   :depends openblas: 
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

      mamba install admixtools

   and update with::

      mamba update admixtools

  To create a new environment, run::

      mamba create --name myenvname admixtools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/admixtools:<tag>

   (see `admixtools/tags`_ for valid values for ``<tag>``)


.. |downloads_admixtools| image:: https://img.shields.io/conda/dn/bioconda/admixtools.svg?style=flat
   :target: https://anaconda.org/bioconda/admixtools
   :alt:   (downloads)
.. |docker_admixtools| image:: https://quay.io/repository/biocontainers/admixtools/status
   :target: https://quay.io/repository/biocontainers/admixtools
.. _`admixtools/tags`: https://quay.io/repository/biocontainers/admixtools?tab=tags


.. raw:: html

    <script>
        var package = "admixtools";
        var versions = ["7.0.2","7.0.2","7.0.2","7.0.2","7.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/admixtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/admixtools/README.html
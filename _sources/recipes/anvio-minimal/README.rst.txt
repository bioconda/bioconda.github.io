:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'anvio-minimal'
.. highlight: bash

anvio-minimal
=============

.. conda:recipe:: anvio-minimal
   :replaces_section_title:
   :noindex:

   An interactive analysis and visualization platform for omics data

   :homepage: https://merenlab.org/software/anvio/
   :documentation: https://anvio.org/learn/
   
   :developer docs: https://github.com/merenlab/anvio
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`anvio-minimal <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/anvio-minimal>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/anvio-minimal/meta.yaml>`_
   :links: biotools: :biotools:`anvio`, doi: :doi:`10.1038/s41564-020-00834-3`

   


.. conda:package:: anvio-minimal

   |downloads_anvio-minimal| |docker_anvio-minimal|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>8-0</code>,  <code>7.1-0</code>,  <code>7-0</code>,  <code>6.2-1</code>,  <code>6.2-0</code>,  <code>6.1-1</code>,  <code>6.1-0</code>,  <code>6-0</code>,  <code>5.5.0-0</code>,  </span></summary>
      

      ``8-0``,  ``7.1-0``,  ``7-0``,  ``6.2-1``,  ``6.2-0``,  ``6.1-1``,  ``6.1-0``,  ``6-0``,  ``5.5.0-0``,  ``5.4.0-0``,  ``5.3.0-0``,  ``5.2.0-1``,  ``5.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bottle: 
   :depends colored: 
   :depends django: 
   :depends ete3: 
   :depends illumina-utils: 
   :depends matplotlib-base: 
   :depends mistune: 
   :depends multiprocess: 
   :depends networkx: 
   :depends numba: 
   :depends numpy: ``<=1.24``
   :depends pandas: ``1.4.4``
   :depends paste: 
   :depends plotext: 
   :depends psutil: 
   :depends pyani: ``0.2.10``
   :depends pysam: 
   :depends python: ``>=3``
   :depends requests: 
   :depends rich-argparse: 
   :depends scikit-learn: ``1.2.2``
   :depends scipy: 
   :depends six: 
   :depends snakemake-minimal: ``5.10.0``
   :depends sqlite: ``>=3.31.1``
   :depends statsmodels: 
   :depends tabulate: 
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

      mamba install anvio-minimal

   and update with::

      mamba update anvio-minimal

  To create a new environment, run::

      mamba create --name myenvname anvio-minimal

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/anvio-minimal:<tag>

   (see `anvio-minimal/tags`_ for valid values for ``<tag>``)


.. |downloads_anvio-minimal| image:: https://img.shields.io/conda/dn/bioconda/anvio-minimal.svg?style=flat
   :target: https://anaconda.org/bioconda/anvio-minimal
   :alt:   (downloads)
.. |docker_anvio-minimal| image:: https://quay.io/repository/biocontainers/anvio-minimal/status
   :target: https://quay.io/repository/biocontainers/anvio-minimal
.. _`anvio-minimal/tags`: https://quay.io/repository/biocontainers/anvio-minimal?tab=tags


.. raw:: html

    <script>
        var package = "anvio-minimal";
        var versions = ["8","7.1","7","6.2","6.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/anvio-minimal/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/anvio-minimal/README.html
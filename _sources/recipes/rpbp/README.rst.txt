:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rpbp'
.. highlight: bash

rpbp
====

.. conda:recipe:: rpbp
   :replaces_section_title:
   :noindex:

   Ribosome profiling with Bayesian predictions \(Rp\-Bp\).

   :homepage: https://github.com/dieterich-lab/rp-bp
   :documentation: https://rp-bp.readthedocs.io/en/latest
   
   :license: MIT / MIT
   :recipe: /`rpbp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rpbp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rpbp/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gkw1350`

   


.. conda:package:: rpbp

   |downloads_rpbp| |docker_rpbp|

   :versions:
      
      

      ``3.0.4-3``,  ``3.0.4-2``,  ``3.0.4-1``,  ``3.0.4-0``,  ``3.0.2-2``,  ``3.0.2-1``,  ``3.0.2-0``,  ``3.0.1-1``,  ``3.0.1-0``

      

   
   :depends biopython: 
   :depends bowtie2: 
   :depends cmdstanpy: ``>=1.0.0``
   :depends dash: 
   :depends dash-bio: 
   :depends dash-bootstrap-components: 
   :depends fastqc: 
   :depends flexbar: 
   :depends joblib: 
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends numpy: 
   :depends pandas: 
   :depends pbiotools: ``>=4.0.2``
   :depends pysam: ``>0.9.1``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends pyyaml: 
   :depends samtools: 
   :depends scipy: 
   :depends star: 
   :depends statsmodels: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install rpbp

   and update with::

      mamba update rpbp

  To create a new environment, run::

      mamba create --name myenvname rpbp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rpbp:<tag>

   (see `rpbp/tags`_ for valid values for ``<tag>``)


.. |downloads_rpbp| image:: https://img.shields.io/conda/dn/bioconda/rpbp.svg?style=flat
   :target: https://anaconda.org/bioconda/rpbp
   :alt:   (downloads)
.. |docker_rpbp| image:: https://quay.io/repository/biocontainers/rpbp/status
   :target: https://quay.io/repository/biocontainers/rpbp
.. _`rpbp/tags`: https://quay.io/repository/biocontainers/rpbp?tab=tags


.. raw:: html

    <script>
        var package = "rpbp";
        var versions = ["3.0.4","3.0.4","3.0.4","3.0.4","3.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rpbp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rpbp/README.html
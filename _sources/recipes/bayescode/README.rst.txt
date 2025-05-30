:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bayescode'
.. highlight: bash

bayescode
=========

.. conda:recipe:: bayescode
   :replaces_section_title:
   :noindex:

   Mutation\-Selection phylogenetic codon models to detect site\-specific adaptive evolution or to infer long\-term effective population size.

   :homepage: https://github.com/ThibaultLatrille/bayescode
   :documentation: https://github.com/ThibaultLatrille/bayescode/wiki
   
   :license: MIT / MIT
   :recipe: /`bayescode <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bayescode>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bayescode/meta.yaml>`_

   


.. conda:package:: bayescode

   |downloads_bayescode| |docker_bayescode|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.4-0</code>,  <code>1.3.3-1</code>,  <code>1.3.3-0</code>,  <code>1.3.2-1</code>,  <code>1.3.2-0</code>,  <code>1.3.1-0</code>,  <code>1.3.0-0</code>,  <code>1.2.2-0</code>,  <code>1.1.6-2</code>,  </span></summary>
      

      ``1.3.4-0``,  ``1.3.3-1``,  ``1.3.3-0``,  ``1.3.2-1``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.2-0``,  ``1.1.6-2``,  ``1.1.6-1``,  ``1.1.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends ete3: 
   :depends legacy-cgi: 
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3.6``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bayescode

   and update with::

      mamba update bayescode

  To create a new environment, run::

      mamba create --name myenvname bayescode

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bayescode:<tag>

   (see `bayescode/tags`_ for valid values for ``<tag>``)


.. |downloads_bayescode| image:: https://img.shields.io/conda/dn/bioconda/bayescode.svg?style=flat
   :target: https://anaconda.org/bioconda/bayescode
   :alt:   (downloads)
.. |docker_bayescode| image:: https://quay.io/repository/biocontainers/bayescode/status
   :target: https://quay.io/repository/biocontainers/bayescode
.. _`bayescode/tags`: https://quay.io/repository/biocontainers/bayescode?tab=tags


.. raw:: html

    <script>
        var package = "bayescode";
        var versions = ["1.3.4","1.3.3","1.3.3","1.3.2","1.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bayescode/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bayescode/README.html
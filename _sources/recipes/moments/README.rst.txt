:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'moments'
.. highlight: bash

moments
=======

.. conda:recipe:: moments
   :replaces_section_title:
   :noindex:

   Evolutionary inference using SFS and LD statistics.

   :homepage: https://github.com/MomentsLD/moments
   :documentation: https://momentsld.github.io/moments
   
   :license: MIT / MIT
   :recipe: /`moments <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/moments>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/moments/meta.yaml>`_
   :links: doi: :doi:`10.1534/genetics.117.200493`, doi: :doi:`10.1371/journal.pgen.1008204`, doi: :doi:`10.1093/molbev/msz265`

   


.. conda:package:: moments

   |downloads_moments| |docker_moments|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.5-0</code>,  <code>1.4.4-0</code>,  <code>1.4.3-0</code>,  <code>1.4.2-0</code>,  <code>1.3.1-0</code>,  <code>1.1.16-4</code>,  <code>1.1.16-3</code>,  <code>1.1.16-2</code>,  <code>1.1.16-1</code>,  </span></summary>
      

      ``1.4.5-0``,  ``1.4.4-0``,  ``1.4.3-0``,  ``1.4.2-0``,  ``1.3.1-0``,  ``1.1.16-4``,  ``1.1.16-3``,  ``1.1.16-2``,  ``1.1.16-1``,  ``1.1.16-0``,  ``1.1.14-0``,  ``1.1.13-0``,  ``1.1.12-1``,  ``1.1.12-0``,  ``1.1.10-1``,  ``1.1.10-0``,  ``1.1.9-2``,  ``1.1.9-1``,  ``1.1.9-0``,  ``1.1.8-1``,  ``1.1.8-0``,  ``1.1.7-0``,  ``1.1.6-0``,  ``1.1.5-0``,  ``1.1.4-0``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.0.9-1``,  ``1.0.9-0``,  ``1.0.8-1``,  ``1.0.8-0``,  ``1.0.7-0``,  ``1.0.6-1``,  ``1.0.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends demes: 
   :depends libgcc: ``>=13``
   :depends mpmath: 
   :depends numpy: ``>=1.22.3,<2.0a0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends scipy: 
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

      mamba install moments

   and update with::

      mamba update moments

  To create a new environment, run::

      mamba create --name myenvname moments

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/moments:<tag>

   (see `moments/tags`_ for valid values for ``<tag>``)


.. |downloads_moments| image:: https://img.shields.io/conda/dn/bioconda/moments.svg?style=flat
   :target: https://anaconda.org/bioconda/moments
   :alt:   (downloads)
.. |docker_moments| image:: https://quay.io/repository/biocontainers/moments/status
   :target: https://quay.io/repository/biocontainers/moments
.. _`moments/tags`: https://quay.io/repository/biocontainers/moments?tab=tags


.. raw:: html

    <script>
        var package = "moments";
        var versions = ["1.4.5","1.4.4","1.4.3","1.4.2","1.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/moments/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/moments/README.html
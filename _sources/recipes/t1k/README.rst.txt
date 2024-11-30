:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 't1k'
.. highlight: bash

t1k
===

.. conda:recipe:: t1k
   :replaces_section_title:
   :noindex:

   T1K is a versatile methods to genotype highly polymorphic genes \(e.g. KIR\, HLA\) with RNA\-seq\, WGS or WES data.

   :homepage: https://github.com/mourisl/T1K
   :license: MIT / MIT
   :recipe: /`t1k <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/t1k>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/t1k/meta.yaml>`_

   


.. conda:package:: t1k

   |downloads_t1k| |docker_t1k|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.6-2</code>,  <code>1.0.6-1</code>,  <code>1.0.6-0</code>,  <code>1.0.5-0</code>,  <code>1.0.4-0</code>,  <code>1.0.3-0</code>,  <code>1.0.2-1</code>,  <code>1.0.2-0</code>,  <code>1.0.1-0</code>,  </span></summary>
      

      ``1.0.6-2``,  ``1.0.6-1``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-1``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends curl: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends perl: 
   :depends python: 
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

      mamba install t1k

   and update with::

      mamba update t1k

  To create a new environment, run::

      mamba create --name myenvname t1k

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/t1k:<tag>

   (see `t1k/tags`_ for valid values for ``<tag>``)


.. |downloads_t1k| image:: https://img.shields.io/conda/dn/bioconda/t1k.svg?style=flat
   :target: https://anaconda.org/bioconda/t1k
   :alt:   (downloads)
.. |docker_t1k| image:: https://quay.io/repository/biocontainers/t1k/status
   :target: https://quay.io/repository/biocontainers/t1k
.. _`t1k/tags`: https://quay.io/repository/biocontainers/t1k?tab=tags


.. raw:: html

    <script>
        var package = "t1k";
        var versions = ["1.0.6","1.0.6","1.0.6","1.0.5","1.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/t1k/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/t1k/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'anchorwave'
.. highlight: bash

anchorwave
==========

.. conda:recipe:: anchorwave
   :replaces_section_title:
   :noindex:

   Sensitive alignment of genomes with high sequence diversity\, extensive structural polymorphism\, and whole\-genome duplication variation.

   :homepage: https://github.com/baoxingsong/AnchorWave
   :documentation: https://github.com/baoxingsong/AnchorWave/blob/v1.2.6/README.md
   
   :license: MIT / MIT
   :recipe: /`anchorwave <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/anchorwave>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/anchorwave/meta.yaml>`_

   


.. conda:package:: anchorwave

   |downloads_anchorwave| |docker_anchorwave|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.6-0</code>,  <code>1.2.5-1</code>,  <code>1.2.5-0</code>,  <code>1.2.3-0</code>,  <code>1.2.2-0</code>,  <code>1.2.1-2</code>,  <code>1.2.1-1</code>,  <code>1.2.1-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.2.6-0``,  ``1.2.5-1``,  ``1.2.5-0``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.2.1-2``,  ``1.2.1-1``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.1-0``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends gmap: 
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends minimap2: 
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

      mamba install anchorwave

   and update with::

      mamba update anchorwave

  To create a new environment, run::

      mamba create --name myenvname anchorwave

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/anchorwave:<tag>

   (see `anchorwave/tags`_ for valid values for ``<tag>``)


.. |downloads_anchorwave| image:: https://img.shields.io/conda/dn/bioconda/anchorwave.svg?style=flat
   :target: https://anaconda.org/bioconda/anchorwave
   :alt:   (downloads)
.. |docker_anchorwave| image:: https://quay.io/repository/biocontainers/anchorwave/status
   :target: https://quay.io/repository/biocontainers/anchorwave
.. _`anchorwave/tags`: https://quay.io/repository/biocontainers/anchorwave?tab=tags


.. raw:: html

    <script>
        var package = "anchorwave";
        var versions = ["1.2.6","1.2.5","1.2.5","1.2.3","1.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/anchorwave/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/anchorwave/README.html
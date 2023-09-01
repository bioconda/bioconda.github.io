:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rscape'
.. highlight: bash

rscape
======

.. conda:recipe:: rscape
   :replaces_section_title:
   :noindex:

   R\-scape \(RNA Structural Covariation Above Phylogenetic Expectation\) looks for evidence of a conserved RNA secondary structure by measuring pairwise covariations observed in an input multiple sequence alignment.

   :homepage: http://eddylab.org/R-scape/
   :license: GPLv3
   :recipe: /`rscape <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rscape>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rscape/meta.yaml>`_

   


.. conda:package:: rscape

   |downloads_rscape| |docker_rscape|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.0-4</code>,  <code>1.4.0-3</code>,  <code>1.4.0-2</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  <code>1.2.2-2</code>,  <code>1.2.2-1</code>,  <code>1.2.2-0</code>,  <code>1.0.4-2</code>,  </span></summary>
      

      ``1.4.0-4``,  ``1.4.0-3``,  ``1.4.0-2``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.2-2``,  ``1.2.2-1``,  ``1.2.2-0``,  ``1.0.4-2``,  ``1.0.4-1``,  ``0.8.3-7``,  ``0.8.3-6``,  ``0.8.3-5``,  ``0.8.3-4``,  ``0.8.3-3``,  ``0.8.3-2``,  ``0.8.3-1``,  ``0.8.3-0``,  ``0.6.1-4``,  ``0.6.1-3``,  ``0.6.1-2``,  ``0.6.1-0``,  ``0.3.1-0``,  ``0.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends gnuplot: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends perl: 
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

      mamba install rscape

   and update with::

      mamba update rscape

  To create a new environment, run::

      mamba create --name myenvname rscape

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rscape:<tag>

   (see `rscape/tags`_ for valid values for ``<tag>``)


.. |downloads_rscape| image:: https://img.shields.io/conda/dn/bioconda/rscape.svg?style=flat
   :target: https://anaconda.org/bioconda/rscape
   :alt:   (downloads)
.. |docker_rscape| image:: https://quay.io/repository/biocontainers/rscape/status
   :target: https://quay.io/repository/biocontainers/rscape
.. _`rscape/tags`: https://quay.io/repository/biocontainers/rscape?tab=tags


.. raw:: html

    <script>
        var package = "rscape";
        var versions = ["1.4.0","1.4.0","1.4.0","1.4.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rscape/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rscape/README.html
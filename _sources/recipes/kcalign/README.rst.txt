:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kcalign'
.. highlight: bash

kcalign
=======

.. conda:recipe:: kcalign
   :replaces_section_title:
   :noindex:

   Kalgin\-based codon\-aware aligner for multiple sequences

   :homepage: https://github.com/davebx/kc-align
   :documentation: https://github.com/davebx/kc-align/blob/master/README.md
   
   :license: OTHER / AFL-3.0-only
   :recipe: /`kcalign <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kcalign>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kcalign/meta.yaml>`_

   


.. conda:package:: kcalign

   |downloads_kcalign| |docker_kcalign|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.2-0</code>,  <code>1.0.1-1</code>,  <code>1.0.1-0</code>,  <code>1.0-0</code>,  <code>0.6.5-0</code>,  <code>0.6.4-0</code>,  <code>0.6.3-0</code>,  <code>0.6.1-0</code>,  <code>0.6-0</code>,  </span></summary>
      

      ``1.0.2-0``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0-0``,  ``0.6.5-0``,  ``0.6.4-0``,  ``0.6.3-0``,  ``0.6.1-0``,  ``0.6-0``,  ``0.5.16-0``,  ``0.5.15-0``,  ``0.5.14-0``,  ``0.5.13-1``,  ``0.5.13-0``,  ``0.5.11-0``,  ``0.5.9-0``,  ``0.5.8-0``,  ``0.5.7-0``,  ``0.5.6-0``,  ``0.5.4-0``,  ``0.5.3-0``,  ``0.5.2-0``,  ``0.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: 
   :depends kalign3: 
   :depends mafft: 
   :depends python: ``>=3.6``
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

      mamba install kcalign

   and update with::

      mamba update kcalign

  To create a new environment, run::

      mamba create --name myenvname kcalign

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/kcalign:<tag>

   (see `kcalign/tags`_ for valid values for ``<tag>``)


.. |downloads_kcalign| image:: https://img.shields.io/conda/dn/bioconda/kcalign.svg?style=flat
   :target: https://anaconda.org/bioconda/kcalign
   :alt:   (downloads)
.. |docker_kcalign| image:: https://quay.io/repository/biocontainers/kcalign/status
   :target: https://quay.io/repository/biocontainers/kcalign
.. _`kcalign/tags`: https://quay.io/repository/biocontainers/kcalign?tab=tags


.. raw:: html

    <script>
        var package = "kcalign";
        var versions = ["1.0.2","1.0.1","1.0.1","1.0","0.6.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kcalign/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kcalign/README.html
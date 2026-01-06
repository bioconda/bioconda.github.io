:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'orthofinder'
.. highlight: bash

orthofinder
===========

.. conda:recipe:: orthofinder
   :replaces_section_title:
   :noindex:

   Accurate inference of orthogroups\, orthologues\, gene trees and rooted species tree made easy\!

   :homepage: https://github.com/OrthoFinder/OrthoFinder
   :documentation: https://orthofinder.github.io/OrthoFinder
   
   :license: GPL3 / GPL-3.0-only
   :recipe: /`orthofinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/orthofinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/orthofinder/meta.yaml>`_

   


.. conda:package:: orthofinder

   |downloads_orthofinder| |docker_orthofinder|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.1.2-0</code>,  <code>3.1.1-0</code>,  <code>3.1.0-1</code>,  <code>3.1.0-0</code>,  <code>3.0.1b1-0</code>,  <code>2.5.5-2</code>,  <code>2.5.5-1</code>,  <code>2.5.5-0</code>,  <code>2.5.4-0</code>,  </span></summary>
      

      ``3.1.2-0``,  ``3.1.1-0``,  ``3.1.0-1``,  ``3.1.0-0``,  ``3.0.1b1-0``,  ``2.5.5-2``,  ``2.5.5-1``,  ``2.5.5-0``,  ``2.5.4-0``,  ``2.5.3-0``,  ``2.5.2-1``,  ``2.5.2-0``,  ``2.5.1-0``,  ``2.4.1-1``,  ``2.4.1-0``,  ``2.4.0-1``,  ``2.4.0-0``,  ``2.3.12-0``,  ``2.3.11-1``,  ``2.3.11-0``,  ``2.3.10-0``,  ``2.3.8-2``,  ``2.3.8-1``,  ``2.3.8-0``,  ``2.3.3-1``,  ``2.3.3-0``,  ``2.2.7-0``,  ``2.2.6-0``,  ``2.2.1-0``,  ``2.2.0-0``,  ``2.1.2-1``,  ``2.1.2-0``,  ``1.1.10-0``,  ``1.1.8-0``,  ``1.1.4-0``,  ``1.1.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends aster: 
   :depends biopython: 
   :depends blast: 
   :depends bzip2: 
   :depends diamond: ``<2.1|>=2.1.7``
   :depends ete4: 
   :depends famsa: 
   :depends fastme: 
   :depends fasttree: 
   :depends iqtree: 
   :depends mafft: 
   :depends mcl: 
   :depends mmseqs2: 
   :depends muscle: ``<5``
   :depends numpy: 
   :depends python: ``>=3.8,<=3.12``
   :depends raxml: 
   :depends raxml-ng: 
   :depends rich: 
   :depends scikit-learn: 
   :depends scipy: 
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

      mamba install orthofinder

   and update with::

      mamba update orthofinder

  To create a new environment, run::

      mamba create --name myenvname orthofinder

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/orthofinder:<tag>

   (see `orthofinder/tags`_ for valid values for ``<tag>``)


.. |downloads_orthofinder| image:: https://img.shields.io/conda/dn/bioconda/orthofinder.svg?style=flat
   :target: https://anaconda.org/bioconda/orthofinder
   :alt:   (downloads)
.. |docker_orthofinder| image:: https://quay.io/repository/biocontainers/orthofinder/status
   :target: https://quay.io/repository/biocontainers/orthofinder
.. _`orthofinder/tags`: https://quay.io/repository/biocontainers/orthofinder?tab=tags


.. raw:: html

    <script>
        var package = "orthofinder";
        var versions = ["3.1.2","3.1.1","3.1.0","3.1.0","3.0.1b1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/orthofinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/orthofinder/README.html
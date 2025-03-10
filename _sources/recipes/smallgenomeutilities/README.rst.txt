:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'smallgenomeutilities'
.. highlight: bash

smallgenomeutilities
====================

.. conda:recipe:: smallgenomeutilities
   :replaces_section_title:
   :noindex:

   A collection of scripts that are useful for dealing with viral RNA NGS data.

   :homepage: https://github.com/cbg-ethz/smallgenomeutilities
   :license: GPL2 / GNU General Public License v2 or later (GPLv2+)
   :recipe: /`smallgenomeutilities <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smallgenomeutilities>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smallgenomeutilities/meta.yaml>`_

   


.. conda:package:: smallgenomeutilities

   |downloads_smallgenomeutilities| |docker_smallgenomeutilities|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.0-0</code>,  <code>0.4.1-0</code>,  <code>0.4.0-0</code>,  <code>0.3.9-0</code>,  <code>0.3.8-0</code>,  <code>0.3.7-0</code>,  <code>0.3.6-0</code>,  <code>0.3.5-0</code>,  <code>0.3.4-0</code>,  </span></summary>
      

      ``0.5.0-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.9-0``,  ``0.3.8-0``,  ``0.3.7-0``,  ``0.3.6-0``,  ``0.3.5-0``,  ``0.3.4-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.1-2``,  ``0.2.1-1``,  ``0.2.1-0``,  ``0.1-1``,  ``0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bcbio-gff: 
   :depends biopython: ``1.83.*``
   :depends mafft: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends progress: 
   :depends pysam: ``>=0.16``
   :depends pysamstats: 
   :depends python: ``>3``
   :depends pyyaml: 
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

      mamba install smallgenomeutilities

   and update with::

      mamba update smallgenomeutilities

  To create a new environment, run::

      mamba create --name myenvname smallgenomeutilities

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/smallgenomeutilities:<tag>

   (see `smallgenomeutilities/tags`_ for valid values for ``<tag>``)


.. |downloads_smallgenomeutilities| image:: https://img.shields.io/conda/dn/bioconda/smallgenomeutilities.svg?style=flat
   :target: https://anaconda.org/bioconda/smallgenomeutilities
   :alt:   (downloads)
.. |docker_smallgenomeutilities| image:: https://quay.io/repository/biocontainers/smallgenomeutilities/status
   :target: https://quay.io/repository/biocontainers/smallgenomeutilities
.. _`smallgenomeutilities/tags`: https://quay.io/repository/biocontainers/smallgenomeutilities?tab=tags


.. raw:: html

    <script>
        var package = "smallgenomeutilities";
        var versions = ["0.5.0","0.4.1","0.4.0","0.3.9","0.3.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/smallgenomeutilities/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/smallgenomeutilities/README.html
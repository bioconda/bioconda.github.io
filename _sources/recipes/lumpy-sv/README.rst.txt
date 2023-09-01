:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lumpy-sv'
.. highlight: bash

lumpy-sv
========

.. conda:recipe:: lumpy-sv
   :replaces_section_title:
   :noindex:

   a general probabilistic framework for structural variant discovery

   :homepage: https://github.com/arq5x/lumpy-sv
   :license: MIT
   :recipe: /`lumpy-sv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lumpy-sv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lumpy-sv/meta.yaml>`_

   


.. conda:package:: lumpy-sv

   |downloads_lumpy-sv| |docker_lumpy-sv|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.1-3</code>,  <code>0.3.1-2</code>,  <code>0.3.1-1</code>,  <code>0.3.1-0</code>,  <code>0.3.0-6</code>,  <code>0.3.0-5</code>,  <code>0.3.0-4</code>,  <code>0.3.0-3</code>,  <code>0.3.0-2</code>,  </span></summary>
      

      ``0.3.1-3``,  ``0.3.1-2``,  ``0.3.1-1``,  ``0.3.1-0``,  ``0.3.0-6``,  ``0.3.0-5``,  ``0.3.0-4``,  ``0.3.0-3``,  ``0.3.0-2``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.14a-2``,  ``0.2.14a-1``,  ``0.2.14a-0``,  ``0.2.13-1``,  ``0.2.13-0``,  ``0.2.12-3``,  ``0.2.12-2``,  ``0.2.12-1``,  ``0.2.12-0``,  ``0.2.11-0``

      
      .. raw:: html

         </details>
      

   
   :depends bamkit: 
   :depends gawk: 
   :depends htslib: 
   :depends lumpy-sv-minimal: ``0.3.1.*``
   :depends numpy: 
   :depends pysam: 
   :depends python: ``2.7.*``
   :depends sambamba: 
   :depends samblaster: 
   :depends samtools: 
   :depends util-linux: 
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

      mamba install lumpy-sv

   and update with::

      mamba update lumpy-sv

  To create a new environment, run::

      mamba create --name myenvname lumpy-sv

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/lumpy-sv:<tag>

   (see `lumpy-sv/tags`_ for valid values for ``<tag>``)


.. |downloads_lumpy-sv| image:: https://img.shields.io/conda/dn/bioconda/lumpy-sv.svg?style=flat
   :target: https://anaconda.org/bioconda/lumpy-sv
   :alt:   (downloads)
.. |docker_lumpy-sv| image:: https://quay.io/repository/biocontainers/lumpy-sv/status
   :target: https://quay.io/repository/biocontainers/lumpy-sv
.. _`lumpy-sv/tags`: https://quay.io/repository/biocontainers/lumpy-sv?tab=tags


.. raw:: html

    <script>
        var package = "lumpy-sv";
        var versions = ["0.3.1","0.3.1","0.3.1","0.3.1","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lumpy-sv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lumpy-sv/README.html
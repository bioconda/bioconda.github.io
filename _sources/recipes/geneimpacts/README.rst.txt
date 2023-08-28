:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'geneimpacts'
.. highlight: bash

geneimpacts
===========

.. conda:recipe:: geneimpacts
   :replaces_section_title:
   :noindex:

   prioritize effects of variant annotations from VEP\, SnpEff\, et al.

   :homepage: https://github.com/brentp/geneimpacts
   :license: MIT
   :recipe: /`geneimpacts <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/geneimpacts>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/geneimpacts/meta.yaml>`_

   


.. conda:package:: geneimpacts

   |downloads_geneimpacts| |docker_geneimpacts|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.7-2</code>,  <code>0.3.7-1</code>,  <code>0.3.7-0</code>,  <code>0.3.6-4</code>,  <code>0.3.6-3</code>,  <code>0.3.6-2</code>,  <code>0.3.6-0</code>,  <code>0.3.5-0</code>,  <code>0.3.4-0</code>,  </span></summary>
      

      ``0.3.7-2``,  ``0.3.7-1``,  ``0.3.7-0``,  ``0.3.6-4``,  ``0.3.6-3``,  ``0.3.6-2``,  ``0.3.6-0``,  ``0.3.5-0``,  ``0.3.4-0``,  ``0.3.3-0``,  ``0.3.1-0``,  ``0.3.0a0-0``,  ``0.2.0-1``,  ``0.1.4-1``,  ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.1.0-0``,  ``0.0.9-0``,  ``0.0.8-0``,  ``0.0.7-0``,  ``0.0.5-0``,  ``0.0.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends python: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install geneimpacts

   and update with::

      mamba update geneimpacts

  To create a new environment, run::

      mamba create --name myenvname geneimpacts

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/geneimpacts:<tag>

   (see `geneimpacts/tags`_ for valid values for ``<tag>``)


.. |downloads_geneimpacts| image:: https://img.shields.io/conda/dn/bioconda/geneimpacts.svg?style=flat
   :target: https://anaconda.org/bioconda/geneimpacts
   :alt:   (downloads)
.. |docker_geneimpacts| image:: https://quay.io/repository/biocontainers/geneimpacts/status
   :target: https://quay.io/repository/biocontainers/geneimpacts
.. _`geneimpacts/tags`: https://quay.io/repository/biocontainers/geneimpacts?tab=tags


.. raw:: html

    <script>
        var package = "geneimpacts";
        var versions = ["0.3.7","0.3.7","0.3.7","0.3.6","0.3.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/geneimpacts/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/geneimpacts/README.html
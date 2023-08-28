:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'constellations'
.. highlight: bash

constellations
==============

.. conda:recipe:: constellations
   :replaces_section_title:
   :noindex:

   Descriptions of constellations of mutations for the SARS\-CoV\-2 virus

   :homepage: https://github.com/cov-lineages/constellations
   :license: CC-BY-ND-4.0
   :recipe: /`constellations <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/constellations>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/constellations/meta.yaml>`_

   


.. conda:package:: constellations

   |downloads_constellations| |docker_constellations|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.1.12-0</code>,  <code>0.1.10-0</code>,  <code>0.1.9-0</code>,  <code>0.1.8-0</code>,  <code>0.1.7-0</code>,  <code>0.1.6-0</code>,  <code>0.1.4-0</code>,  <code>0.1.3-0</code>,  <code>0.1.2-0</code>,  </span></summary>
      

      ``0.1.12-0``,  ``0.1.10-0``,  ``0.1.9-0``,  ``0.1.8-0``,  ``0.1.7-0``,  ``0.1.6-0``,  ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.1.0-0``,  ``0.0.30-0``,  ``0.0.29-0``,  ``0.0.28-0``,  ``0.0.27-0``,  ``0.0.26-0``,  ``0.0.25-0``,  ``0.0.24-0``,  ``0.0.23-0``,  ``0.0.22-0``,  ``0.0.21-0``,  ``0.0.20-0``,  ``0.0.19-0``,  ``0.0.18-0``,  ``0.0.16-0``,  ``0.0.15-0``,  ``0.0.14-0``,  ``0.0.13-0``,  ``0.0.11-0``,  ``0.0.10-0``,  ``0.0.9-0``,  ``0.0.7-0``,  ``0.0.5-0``,  ``0.0.4-0``,  ``0.0.2-0``

      
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

      mamba install constellations

   and update with::

      mamba update constellations

  To create a new environment, run::

      mamba create --name myenvname constellations

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/constellations:<tag>

   (see `constellations/tags`_ for valid values for ``<tag>``)


.. |downloads_constellations| image:: https://img.shields.io/conda/dn/bioconda/constellations.svg?style=flat
   :target: https://anaconda.org/bioconda/constellations
   :alt:   (downloads)
.. |docker_constellations| image:: https://quay.io/repository/biocontainers/constellations/status
   :target: https://quay.io/repository/biocontainers/constellations
.. _`constellations/tags`: https://quay.io/repository/biocontainers/constellations?tab=tags


.. raw:: html

    <script>
        var package = "constellations";
        var versions = ["0.1.12","0.1.10","0.1.9","0.1.8","0.1.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/constellations/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/constellations/README.html
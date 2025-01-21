:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'igv'
.. highlight: bash

igv
===

.. conda:recipe:: igv
   :replaces_section_title:
   :noindex:

   Integrative Genomics Viewer. Fast\, efficient\, scalable visualization tool for genomics
   data and annotations.


   :homepage: http://www.broadinstitute.org/software/igv/home
   :license: MIT / MIT
   :recipe: /`igv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/igv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/igv/meta.yaml>`_
   :links: biotools: :biotools:`igv`

   


.. conda:package:: igv

   |downloads_igv| |docker_igv|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.19.1-1</code>,  <code>2.19.1-0</code>,  <code>2.17.4-0</code>,  <code>2.17.3-0</code>,  <code>2.16.2-0</code>,  <code>2.13.2-0</code>,  <code>2.13.1-0</code>,  <code>2.13.0-0</code>,  <code>2.12.3-0</code>,  </span></summary>
      

      ``2.19.1-1``,  ``2.19.1-0``,  ``2.17.4-0``,  ``2.17.3-0``,  ``2.16.2-0``,  ``2.13.2-0``,  ``2.13.1-0``,  ``2.13.0-0``,  ``2.12.3-0``,  ``2.12.2-0``,  ``2.12.1-0``,  ``2.12.0-0``,  ``2.11.9-0``,  ``2.11.7-0``,  ``2.11.6-0``,  ``2.11.5-0``,  ``2.11.4-0``,  ``2.11.3-0``,  ``2.11.2-0``,  ``2.11.1-0``,  ``2.11.0-0``,  ``2.10.3-0``,  ``2.10.2-0``,  ``2.10.0-0``,  ``2.9.5-0``,  ``2.9.4-1``,  ``2.9.4-0``,  ``2.9.3-0``,  ``2.9.2-0``,  ``2.9.1-0``,  ``2.9.0-0``,  ``2.8.13-0``,  ``2.8.12-0``,  ``2.8.11-0``,  ``2.8.10-0``,  ``2.8.9-0``,  ``2.8.8-0``,  ``2.8.6-0``,  ``2.8.5-0``,  ``2.8.4-0``,  ``2.8.3-0``,  ``2.8.2-0``,  ``2.8.1-0``,  ``2.8.0-0``,  ``2.5.2-0``,  ``2.4.17-0``,  ``2.4.16-0``,  ``2.4.9-1``,  ``2.4.9-0``,  ``2.4.6-0``,  ``2.3.98-0``

      
      .. raw:: html

         </details>
      

   
   :depends glib: 
   :depends openjdk: ``21.*``
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

      mamba install igv

   and update with::

      mamba update igv

  To create a new environment, run::

      mamba create --name myenvname igv

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/igv:<tag>

   (see `igv/tags`_ for valid values for ``<tag>``)


.. |downloads_igv| image:: https://img.shields.io/conda/dn/bioconda/igv.svg?style=flat
   :target: https://anaconda.org/bioconda/igv
   :alt:   (downloads)
.. |docker_igv| image:: https://quay.io/repository/biocontainers/igv/status
   :target: https://quay.io/repository/biocontainers/igv
.. _`igv/tags`: https://quay.io/repository/biocontainers/igv?tab=tags


.. raw:: html

    <script>
        var package = "igv";
        var versions = ["2.19.1","2.19.1","2.17.4","2.17.3","2.16.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/igv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/igv/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'swarm'
.. highlight: bash

swarm
=====

.. conda:recipe:: swarm
   :replaces_section_title:
   :noindex:

   A robust and fast clustering method for amplicon\-based studies.

   :homepage: https://github.com/torognes/swarm
   :license: Affero GPL
   :recipe: /`swarm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/swarm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/swarm/meta.yaml>`_
   :links: biotools: :biotools:`swarm`, doi: :doi:`10.7717/peerj.593`

   


.. conda:package:: swarm

   |downloads_swarm| |docker_swarm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.1.1-0</code>,  <code>3.1.0-2</code>,  <code>3.1.0-1</code>,  <code>3.1.0-0</code>,  <code>3.0.0-0</code>,  <code>2.2.2-2</code>,  <code>2.2.2-1</code>,  <code>2.2.2-0</code>,  <code>2.1.13-0</code>,  </span></summary>
      

      ``3.1.1-0``,  ``3.1.0-2``,  ``3.1.0-1``,  ``3.1.0-0``,  ``3.0.0-0``,  ``2.2.2-2``,  ``2.2.2-1``,  ``2.2.2-0``,  ``2.1.13-0``,  ``2.1.10-0``,  ``2.1.5-0``,  ``1.2.19-1``,  ``1.2.19-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends python: ``>=3``
   :depends python-igraph: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install swarm

   and update with::

      conda update swarm

   or use the docker container::

      docker pull quay.io/biocontainers/swarm:<tag>

   (see `swarm/tags`_ for valid values for ``<tag>``)


.. |downloads_swarm| image:: https://img.shields.io/conda/dn/bioconda/swarm.svg?style=flat
   :target: https://anaconda.org/bioconda/swarm
   :alt:   (downloads)
.. |docker_swarm| image:: https://quay.io/repository/biocontainers/swarm/status
   :target: https://quay.io/repository/biocontainers/swarm
.. _`swarm/tags`: https://quay.io/repository/biocontainers/swarm?tab=tags


.. raw:: html

    <script>
        var package = "swarm";
        var versions = ["3.1.1","3.1.0","3.1.0","3.1.0","3.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/swarm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/swarm/README.html
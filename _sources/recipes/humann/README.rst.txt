:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'humann'
.. highlight: bash

humann
======

.. conda:recipe:: humann
   :replaces_section_title:
   :noindex:

   HUMAnN\: The HMP Unified Metabolic Analysis Network\, version 3

   :homepage: http://huttenhower.sph.harvard.edu/humann
   :developer docs: https://github.com/biobakery/humann
   :license: MIT / MIT
   :recipe: /`humann <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/humann>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/humann/meta.yaml>`_

   


.. conda:package:: humann

   |downloads_humann| |docker_humann|

   :versions:
      
      

      ``3.6-1``,  ``3.6-0``,  ``3.5-0``,  ``3.1.1-0``,  ``3.1.0-0``,  ``3.0.1-0``,  ``3.0.0-1``,  ``3.0.0-0``,  ``3.0.0a4-0``

      

   
   :depends bowtie2: ``>2.1``
   :depends diamond: ``>=0.9.36``
   :depends glpk: 
   :depends metaphlan: ``>=3.1``
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install humann

   and update with::

      conda update humann

   or use the docker container::

      docker pull quay.io/biocontainers/humann:<tag>

   (see `humann/tags`_ for valid values for ``<tag>``)


.. |downloads_humann| image:: https://img.shields.io/conda/dn/bioconda/humann.svg?style=flat
   :target: https://anaconda.org/bioconda/humann
   :alt:   (downloads)
.. |docker_humann| image:: https://quay.io/repository/biocontainers/humann/status
   :target: https://quay.io/repository/biocontainers/humann
.. _`humann/tags`: https://quay.io/repository/biocontainers/humann?tab=tags


.. raw:: html

    <script>
        var package = "humann";
        var versions = ["3.6","3.6","3.5","3.1.1","3.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/humann/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/humann/README.html
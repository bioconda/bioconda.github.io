:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'blend-bio'
.. highlight: bash

blend-bio
=========

.. conda:recipe:: blend-bio
   :replaces_section_title:
   :noindex:

   BLEND is a Fast\, Memory\-Efficient\, and Accurate Mechanism to Find Fuzzy Seed Matches in Genome Analysis

   :homepage: https://github.com/CMU-SAFARI/BLEND
   :license: MIT
   :recipe: /`blend-bio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blend-bio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blend-bio/meta.yaml>`_

   


.. conda:package:: blend-bio

   |downloads_blend-bio| |docker_blend-bio|

   :versions:
      
      

      ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install blend-bio

   and update with::

      conda update blend-bio

   or use the docker container::

      docker pull quay.io/biocontainers/blend-bio:<tag>

   (see `blend-bio/tags`_ for valid values for ``<tag>``)


.. |downloads_blend-bio| image:: https://img.shields.io/conda/dn/bioconda/blend-bio.svg?style=flat
   :target: https://anaconda.org/bioconda/blend-bio
   :alt:   (downloads)
.. |docker_blend-bio| image:: https://quay.io/repository/biocontainers/blend-bio/status
   :target: https://quay.io/repository/biocontainers/blend-bio
.. _`blend-bio/tags`: https://quay.io/repository/biocontainers/blend-bio?tab=tags


.. raw:: html

    <script>
        var package = "blend-bio";
        var versions = ["1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/blend-bio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/blend-bio/README.html
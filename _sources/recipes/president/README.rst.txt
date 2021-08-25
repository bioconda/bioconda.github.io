:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'president'
.. highlight: bash

president
=========

.. conda:recipe:: president
   :replaces_section_title:
   :noindex:

   Calculate pairwise nucleotide identity with respect to a reference sequence.

   :homepage: https://gitlab.com/RKIBioinformaticsPipelines/president
   :license: MIT
   :recipe: /`president <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/president>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/president/meta.yaml>`_
   :links: biotools: :biotools:`president`

   


.. conda:package:: president

   |downloads_president| |docker_president|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6.3-0</code>,  <code>0.6.1-0</code>,  <code>0.6.0-0</code>,  <code>0.5.2-0</code>,  <code>0.5.1-1</code>,  <code>0.5.1-0</code>,  <code>0.5.0-0</code>,  <code>0.4.0-0</code>,  <code>0.3.0-0</code>,  </span></summary>
      

      ``0.6.3-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.2-0``,  ``0.5.1-1``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends numpy: ``>=1.19.5``
   :depends pandas: ``>=1.2.1``
   :depends pblat: ``>=2.5``
   :depends python: ``>=3.8``
   :depends screed: ``>=1.0.4``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install president

   and update with::

      conda update president

   or use the docker container::

      docker pull quay.io/biocontainers/president:<tag>

   (see `president/tags`_ for valid values for ``<tag>``)


.. |downloads_president| image:: https://img.shields.io/conda/dn/bioconda/president.svg?style=flat
   :target: https://anaconda.org/bioconda/president
   :alt:   (downloads)
.. |docker_president| image:: https://quay.io/repository/biocontainers/president/status
   :target: https://quay.io/repository/biocontainers/president
.. _`president/tags`: https://quay.io/repository/biocontainers/president?tab=tags


.. raw:: html

    <script>
        var package = "president";
        var versions = ["0.6.3","0.6.1","0.6.0","0.5.2","0.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/president/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/president/README.html
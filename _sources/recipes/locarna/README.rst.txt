:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'locarna'
.. highlight: bash

locarna
=======

.. conda:recipe:: locarna
   :replaces_section_title:
   :noindex:

   Multiple alignment of RNAs

   :homepage: https://s-will.github.io/LocARNA
   :license: GPL
   :recipe: /`locarna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/locarna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/locarna/meta.yaml>`_
   :links: biotools: :biotools:`locarna`, doi: :doi:`10.1371/journal.pcbi.0030065`

   


.. conda:package:: locarna

   |downloads_locarna| |docker_locarna|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.0RC10-1</code>,  <code>2.0.0RC10-0</code>,  <code>2.0.0RC8-2</code>,  <code>2.0.0RC8-1</code>,  <code>2.0.0RC8-0</code>,  <code>2.0.0RC6-2</code>,  <code>2.0.0RC6-1</code>,  <code>2.0.0RC6-0</code>,  <code>1.9.2.3-2</code>,  </span></summary>
      

      ``2.0.0RC10-1``,  ``2.0.0RC10-0``,  ``2.0.0RC8-2``,  ``2.0.0RC8-1``,  ``2.0.0RC8-0``,  ``2.0.0RC6-2``,  ``2.0.0RC6-1``,  ``2.0.0RC6-0``,  ``1.9.2.3-2``,  ``1.9.2.3-1``,  ``1.9.2.3-0``,  ``1.9.2-1``,  ``1.9.2-0``,  ``1.9.1-2``,  ``1.9.1-1``,  ``1.9.1-0``,  ``1.9.0-0``,  ``1.8.12-0``,  ``1.8.11-1``,  ``1.8.10-0``,  ``1.8.9-3``,  ``1.8.9-2``,  ``1.8.9-1``,  ``1.8.7-1``,  ``1.8.7-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends perl: 
   :depends viennarna: ``2.5.1``
   :depends viennarna: ``>=2.5.1,<2.6.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install locarna

   and update with::

      conda update locarna

   or use the docker container::

      docker pull quay.io/biocontainers/locarna:<tag>

   (see `locarna/tags`_ for valid values for ``<tag>``)


.. |downloads_locarna| image:: https://img.shields.io/conda/dn/bioconda/locarna.svg?style=flat
   :target: https://anaconda.org/bioconda/locarna
   :alt:   (downloads)
.. |docker_locarna| image:: https://quay.io/repository/biocontainers/locarna/status
   :target: https://quay.io/repository/biocontainers/locarna
.. _`locarna/tags`: https://quay.io/repository/biocontainers/locarna?tab=tags


.. raw:: html

    <script>
        var package = "locarna";
        var versions = ["2.0.0RC10","2.0.0RC10","2.0.0RC8","2.0.0RC8","2.0.0RC8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/locarna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/locarna/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'adapterremoval'
.. highlight: bash

adapterremoval
==============

.. conda:recipe:: adapterremoval
   :replaces_section_title:
   :noindex:

   The AdapterRemoval v2 tool for merging and clipping reads.

   :homepage: https://github.com/MikkelSchubert/adapterremoval
   :license: GPL3
   :recipe: /`adapterremoval <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/adapterremoval>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/adapterremoval/meta.yaml>`_

   


.. conda:package:: adapterremoval

   |downloads_adapterremoval| |docker_adapterremoval|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.3.3-2</code>,  <code>2.3.3-1</code>,  <code>2.3.3-0</code>,  <code>2.3.2-2</code>,  <code>2.3.2-1</code>,  <code>2.3.2-0</code>,  <code>2.3.1-1</code>,  <code>2.3.1-0</code>,  <code>2.3.0-0</code>,  </span></summary>
      

      ``2.3.3-2``,  ``2.3.3-1``,  ``2.3.3-0``,  ``2.3.2-2``,  ``2.3.2-1``,  ``2.3.2-0``,  ``2.3.1-1``,  ``2.3.1-0``,  ``2.3.0-0``,  ``2.2.2-4``,  ``2.2.2-3``,  ``2.2.2-2``

      
      .. raw:: html

         </details>
      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install adapterremoval

   and update with::

      conda update adapterremoval

   or use the docker container::

      docker pull quay.io/biocontainers/adapterremoval:<tag>

   (see `adapterremoval/tags`_ for valid values for ``<tag>``)


.. |downloads_adapterremoval| image:: https://img.shields.io/conda/dn/bioconda/adapterremoval.svg?style=flat
   :target: https://anaconda.org/bioconda/adapterremoval
   :alt:   (downloads)
.. |docker_adapterremoval| image:: https://quay.io/repository/biocontainers/adapterremoval/status
   :target: https://quay.io/repository/biocontainers/adapterremoval
.. _`adapterremoval/tags`: https://quay.io/repository/biocontainers/adapterremoval?tab=tags


.. raw:: html

    <script>
        var package = "adapterremoval";
        var versions = ["2.3.3","2.3.3","2.3.3","2.3.2","2.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/adapterremoval/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/adapterremoval/README.html
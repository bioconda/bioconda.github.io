:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tantan'
.. highlight: bash

tantan
======

.. conda:recipe:: tantan
   :replaces_section_title:
   :noindex:

   tantan masks simple regions \(low complexity \& short\-period tandem repeats\) in biological sequences.

   :homepage: https://gitlab.com/mcfrith/tantan
   :license: GPL-3.0-or-later
   :recipe: /`tantan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tantan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tantan/meta.yaml>`_

   


.. conda:package:: tantan

   |downloads_tantan| |docker_tantan|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>40-0</code>,  <code>39-0</code>,  <code>34-0</code>,  <code>32-0</code>,  <code>31-0</code>,  <code>26-2</code>,  <code>26-1</code>,  <code>26-0</code>,  <code>13-2</code>,  </span></summary>
      

      ``40-0``,  ``39-0``,  ``34-0``,  ``32-0``,  ``31-0``,  ``26-2``,  ``26-1``,  ``26-0``,  ``13-2``,  ``13-1``,  ``13-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: ``>=1.2.13,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tantan

   and update with::

      conda update tantan

   or use the docker container::

      docker pull quay.io/biocontainers/tantan:<tag>

   (see `tantan/tags`_ for valid values for ``<tag>``)


.. |downloads_tantan| image:: https://img.shields.io/conda/dn/bioconda/tantan.svg?style=flat
   :target: https://anaconda.org/bioconda/tantan
   :alt:   (downloads)
.. |docker_tantan| image:: https://quay.io/repository/biocontainers/tantan/status
   :target: https://quay.io/repository/biocontainers/tantan
.. _`tantan/tags`: https://quay.io/repository/biocontainers/tantan?tab=tags


.. raw:: html

    <script>
        var package = "tantan";
        var versions = ["40","39","34","32","31"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tantan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tantan/README.html
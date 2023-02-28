:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'crimson'
.. highlight: bash

crimson
=======

.. conda:recipe:: crimson
   :replaces_section_title:
   :noindex:

   Bioinformatics tool outputs converter to JSON or YAML.

   :homepage: https://github.com/bow/crimson
   :license: BSD / BSD License
   :recipe: /`crimson <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crimson>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crimson/meta.yaml>`_

   


.. conda:package:: crimson

   |downloads_crimson| |docker_crimson|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.0-0</code>,  <code>1.0.0-0</code>,  <code>0.5.2-1</code>,  <code>0.5.2-0</code>,  <code>0.5.1-0</code>,  <code>0.5.0-0</code>,  <code>0.4.0-2</code>,  <code>0.4.0-1</code>,  <code>0.3.0-1</code>,  </span></summary>
      

      ``1.1.0-0``,  ``1.0.0-0``,  ``0.5.2-1``,  ``0.5.2-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.0-2``,  ``0.4.0-1``,  ``0.3.0-1``,  ``0.3.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends click: ``>=6.6``
   :depends python: 
   :depends pyyaml: ``>=3.11``
   :depends single-source: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install crimson

   and update with::

      conda update crimson

   or use the docker container::

      docker pull quay.io/biocontainers/crimson:<tag>

   (see `crimson/tags`_ for valid values for ``<tag>``)


.. |downloads_crimson| image:: https://img.shields.io/conda/dn/bioconda/crimson.svg?style=flat
   :target: https://anaconda.org/bioconda/crimson
   :alt:   (downloads)
.. |docker_crimson| image:: https://quay.io/repository/biocontainers/crimson/status
   :target: https://quay.io/repository/biocontainers/crimson
.. _`crimson/tags`: https://quay.io/repository/biocontainers/crimson?tab=tags


.. raw:: html

    <script>
        var package = "crimson";
        var versions = ["1.1.0","1.0.0","0.5.2","0.5.2","0.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/crimson/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/crimson/README.html
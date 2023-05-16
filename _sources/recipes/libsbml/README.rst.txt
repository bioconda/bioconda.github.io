:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'libsbml'
.. highlight: bash

libsbml
=======

.. conda:recipe:: libsbml
   :replaces_section_title:
   :noindex:

   LibSBML is a free\, open\-source programming library to help you read\, write\, manipulate\, translate\, and validate SBML files and data streams.

   :homepage: http://sbml.org/Software/libSBML
   :license: LGPL
   :recipe: /`libsbml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libsbml>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libsbml/meta.yaml>`_

   


.. conda:package:: libsbml

   |downloads_libsbml| |docker_libsbml|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>5.18.0-9</code>,  <code>5.18.0-8</code>,  <code>5.18.0-7</code>,  <code>5.18.0-6</code>,  <code>5.18.0-5</code>,  <code>5.18.0-4</code>,  <code>5.18.0-3</code>,  <code>5.18.0-2</code>,  <code>5.18.0-1</code>,  </span></summary>
      

      ``5.18.0-9``,  ``5.18.0-8``,  ``5.18.0-7``,  ``5.18.0-6``,  ``5.18.0-5``,  ``5.18.0-4``,  ``5.18.0-3``,  ``5.18.0-2``,  ``5.18.0-1``,  ``5.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libxml2: ``>=2.10.4,<2.11.0a0``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install libsbml

   and update with::

      conda update libsbml

   or use the docker container::

      docker pull quay.io/biocontainers/libsbml:<tag>

   (see `libsbml/tags`_ for valid values for ``<tag>``)


.. |downloads_libsbml| image:: https://img.shields.io/conda/dn/bioconda/libsbml.svg?style=flat
   :target: https://anaconda.org/bioconda/libsbml
   :alt:   (downloads)
.. |docker_libsbml| image:: https://quay.io/repository/biocontainers/libsbml/status
   :target: https://quay.io/repository/biocontainers/libsbml
.. _`libsbml/tags`: https://quay.io/repository/biocontainers/libsbml?tab=tags


.. raw:: html

    <script>
        var package = "libsbml";
        var versions = ["5.18.0","5.18.0","5.18.0","5.18.0","5.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/libsbml/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/libsbml/README.html
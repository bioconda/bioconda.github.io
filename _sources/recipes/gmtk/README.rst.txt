:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gmtk'
.. highlight: bash

gmtk
====

.. conda:recipe:: gmtk
   :replaces_section_title:
   :noindex:

   A publicly available toolkit for rapidly prototyping statistical models using dynamic graphical models \(DGMs\) and dynamic Bayesian networks \(DBNs\)

   :homepage: http://melodi.ee.washington.edu/gmtk/
   :license: OSL-3.0
   :recipe: /`gmtk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gmtk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gmtk/meta.yaml>`_

   


.. conda:package:: gmtk

   |downloads_gmtk| |docker_gmtk|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.4-11</code>,  <code>1.4.4-10</code>,  <code>1.4.4-9</code>,  <code>1.4.4-8</code>,  <code>1.4.4-7</code>,  <code>1.4.4-6</code>,  <code>1.4.4-5</code>,  <code>1.4.4-4</code>,  <code>1.4.4-3</code>,  </span></summary>
      

      ``1.4.4-11``,  ``1.4.4-10``,  ``1.4.4-9``,  ``1.4.4-8``,  ``1.4.4-7``,  ``1.4.4-6``,  ``1.4.4-5``,  ``1.4.4-4``,  ``1.4.4-3``,  ``1.4.4-2``,  ``1.4.4-1``,  ``1.4.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends gxx_linux-64: ``10.*``
   :depends hdf5: ``>=1.12.2,<1.12.3.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gmtk

   and update with::

      conda update gmtk

   or use the docker container::

      docker pull quay.io/biocontainers/gmtk:<tag>

   (see `gmtk/tags`_ for valid values for ``<tag>``)


.. |downloads_gmtk| image:: https://img.shields.io/conda/dn/bioconda/gmtk.svg?style=flat
   :target: https://anaconda.org/bioconda/gmtk
   :alt:   (downloads)
.. |docker_gmtk| image:: https://quay.io/repository/biocontainers/gmtk/status
   :target: https://quay.io/repository/biocontainers/gmtk
.. _`gmtk/tags`: https://quay.io/repository/biocontainers/gmtk?tab=tags


.. raw:: html

    <script>
        var package = "gmtk";
        var versions = ["1.4.4","1.4.4","1.4.4","1.4.4","1.4.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gmtk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gmtk/README.html
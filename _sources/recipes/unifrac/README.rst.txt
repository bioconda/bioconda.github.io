:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'unifrac'
.. highlight: bash

unifrac
=======

.. conda:recipe:: unifrac
   :replaces_section_title:
   :noindex:

   Fast phylogenetic diversity calculations

   :homepage: https://github.com/biocore/unifrac
   :license: BSD / BSD-3-Clause
   :recipe: /`unifrac <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/unifrac>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/unifrac/meta.yaml>`_

   UniFrac is a commonly phylogenetic diversity distance metric used in 
   microbiome research. The metric relates two microbiome samples together
   within the context of an evolutionary history\, and produces a distance
   that corresponds to how similar two samples by the amount of overlapping
   branch length.  



.. conda:package:: unifrac

   |downloads_unifrac| |docker_unifrac|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3-0</code>,  <code>1.2-0</code>,  <code>1.1.1-1</code>,  <code>1.1.1-0</code>,  <code>1.1.0-0</code>,  <code>1.0.0-1</code>,  <code>1.0.0-0</code>,  <code>0.20.3-0</code>,  <code>0.20.2-1</code>,  </span></summary>
      

      ``1.3-0``,  ``1.2-0``,  ``1.1.1-1``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.0-1``,  ``1.0.0-0``,  ``0.20.3-0``,  ``0.20.2-1``,  ``0.20.2-0``,  ``0.20.1-0``,  ``0.20.0-1``,  ``0.20.0-0``,  ``0.10.0-1``,  ``0.10.0-0``,  ``0.9.3-1``,  ``0.9.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends biom-format: 
   :depends h5py: ``<3.0.0|>3.3.0``
   :depends iow: 
   :depends libgcc-ng: ``>=12``
   :depends numpy: ``>=1.24.3,<2.0a0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends scikit-bio: ``>=0.5.8``
   :depends scipy: ``>=1.9.0``
   :depends unifrac-binaries: ``>=1.3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install unifrac

   and update with::

      conda update unifrac

   or use the docker container::

      docker pull quay.io/biocontainers/unifrac:<tag>

   (see `unifrac/tags`_ for valid values for ``<tag>``)


.. |downloads_unifrac| image:: https://img.shields.io/conda/dn/bioconda/unifrac.svg?style=flat
   :target: https://anaconda.org/bioconda/unifrac
   :alt:   (downloads)
.. |docker_unifrac| image:: https://quay.io/repository/biocontainers/unifrac/status
   :target: https://quay.io/repository/biocontainers/unifrac
.. _`unifrac/tags`: https://quay.io/repository/biocontainers/unifrac?tab=tags


.. raw:: html

    <script>
        var package = "unifrac";
        var versions = ["1.3","1.2","1.1.1","1.1.1","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/unifrac/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/unifrac/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'physlr'
.. highlight: bash

physlr
======

.. conda:recipe:: physlr
   :replaces_section_title:
   :noindex:

   Physlr\; Next\-generation Physical Maps

   :homepage: https://github.com/bcgsc/physlr
   :documentation: https://github.com/bcgsc/physlr#readme
   
   :license: GPL3
   :recipe: /`physlr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/physlr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/physlr/meta.yaml>`_

   


.. conda:package:: physlr

   |downloads_physlr| |docker_physlr|

   :versions:
      
      

      ``1.0.3-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends make: 
   :depends networkx: 
   :depends ntcard: 
   :depends nthits: 
   :depends numpy: 
   :depends pigz: 
   :depends pypy: 
   :depends python: ``>=3.6.0``
   :depends scikit-learn: 
   :depends scipy: 
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install physlr

   and update with::

      conda update physlr

   or use the docker container::

      docker pull quay.io/biocontainers/physlr:<tag>

   (see `physlr/tags`_ for valid values for ``<tag>``)


.. |downloads_physlr| image:: https://img.shields.io/conda/dn/bioconda/physlr.svg?style=flat
   :target: https://anaconda.org/bioconda/physlr
   :alt:   (downloads)
.. |docker_physlr| image:: https://quay.io/repository/biocontainers/physlr/status
   :target: https://quay.io/repository/biocontainers/physlr
.. _`physlr/tags`: https://quay.io/repository/biocontainers/physlr?tab=tags


.. raw:: html

    <script>
        var package = "physlr";
        var versions = ["1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/physlr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/physlr/README.html
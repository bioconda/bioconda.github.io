:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'braid-mrf'
.. highlight: bash

braid-mrf
=========

.. conda:recipe:: braid-mrf
   :replaces_section_title:
   :noindex:

   Predicting protein complexes

   :homepage: https://github.com/wasineer-dev/braid.git
   :license: MIT / MIT
   :recipe: /`braid-mrf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/braid-mrf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/braid-mrf/meta.yaml>`_

   


.. conda:package:: braid-mrf

   |downloads_braid-mrf| |docker_braid-mrf|

   :versions:
      
      

      ``1.0.9-0``

      

   
   :depends matplotlib-base: 
   :depends numba: 
   :depends numpy: 
   :depends pandas: ``>=0.24.1``
   :depends python: 
   :depends scikit-learn: 
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install braid-mrf

   and update with::

      conda update braid-mrf

   or use the docker container::

      docker pull quay.io/biocontainers/braid-mrf:<tag>

   (see `braid-mrf/tags`_ for valid values for ``<tag>``)


.. |downloads_braid-mrf| image:: https://img.shields.io/conda/dn/bioconda/braid-mrf.svg?style=flat
   :target: https://anaconda.org/bioconda/braid-mrf
   :alt:   (downloads)
.. |docker_braid-mrf| image:: https://quay.io/repository/biocontainers/braid-mrf/status
   :target: https://quay.io/repository/biocontainers/braid-mrf
.. _`braid-mrf/tags`: https://quay.io/repository/biocontainers/braid-mrf?tab=tags


.. raw:: html

    <script>
        var package = "braid-mrf";
        var versions = ["1.0.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/braid-mrf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/braid-mrf/README.html
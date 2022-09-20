:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'stag'
.. highlight: bash

stag
====

.. conda:recipe:: stag
   :replaces_section_title:
   :noindex:

   A hierarchical taxonomic classifier for metagenomic sequences

   :homepage: https://github.com/zellerlab/stag
   :license: GPL / GPL-3.0
   :recipe: /`stag <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stag>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stag/meta.yaml>`_

   


.. conda:package:: stag

   |downloads_stag| |docker_stag|

   :versions:
      
      

      ``0.8.3-0``

      

   
   :depends h5py: ``2.10.0.*``
   :depends hmmer: 
   :depends infernal: 
   :depends numpy: ``1.19.*``
   :depends pandas: 
   :depends prodigal: 
   :depends python: 
   :depends regex: 
   :depends scikit-learn: ``<0.24``
   :depends seqtk: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install stag

   and update with::

      conda update stag

   or use the docker container::

      docker pull quay.io/biocontainers/stag:<tag>

   (see `stag/tags`_ for valid values for ``<tag>``)


.. |downloads_stag| image:: https://img.shields.io/conda/dn/bioconda/stag.svg?style=flat
   :target: https://anaconda.org/bioconda/stag
   :alt:   (downloads)
.. |docker_stag| image:: https://quay.io/repository/biocontainers/stag/status
   :target: https://quay.io/repository/biocontainers/stag
.. _`stag/tags`: https://quay.io/repository/biocontainers/stag?tab=tags


.. raw:: html

    <script>
        var package = "stag";
        var versions = ["0.8.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/stag/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/stag/README.html
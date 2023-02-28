:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sourcetracker'
.. highlight: bash

sourcetracker
=============

.. conda:recipe:: sourcetracker
   :replaces_section_title:
   :noindex:

   Python implementation of the SourceTracker R package.

   :homepage: http://www.biota.com
   :documentation: https://github.com/biota/sourcetracker2
   
   :developer docs: https://github.com/biota/sourcetracker2
   :license: BSD / modified BSD
   :recipe: /`sourcetracker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sourcetracker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sourcetracker/meta.yaml>`_

   Python implementation of the SourceTracker R package.


.. conda:package:: sourcetracker

   |downloads_sourcetracker| |docker_sourcetracker|

   :versions:
      
      

      ``2.0.1-0``

      

   
   :depends biom-format: ``>=2.1.5,<2.2.0``
   :depends click: 
   :depends h5py: 
   :depends ipyparallel: 
   :depends numpy: 
   :depends pandas: 
   :depends python: 
   :depends scikit-bio: 
   :depends setuptools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sourcetracker

   and update with::

      conda update sourcetracker

   or use the docker container::

      docker pull quay.io/biocontainers/sourcetracker:<tag>

   (see `sourcetracker/tags`_ for valid values for ``<tag>``)


.. |downloads_sourcetracker| image:: https://img.shields.io/conda/dn/bioconda/sourcetracker.svg?style=flat
   :target: https://anaconda.org/bioconda/sourcetracker
   :alt:   (downloads)
.. |docker_sourcetracker| image:: https://quay.io/repository/biocontainers/sourcetracker/status
   :target: https://quay.io/repository/biocontainers/sourcetracker
.. _`sourcetracker/tags`: https://quay.io/repository/biocontainers/sourcetracker?tab=tags


.. raw:: html

    <script>
        var package = "sourcetracker";
        var versions = ["2.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sourcetracker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sourcetracker/README.html
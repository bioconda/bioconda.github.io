:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'plannotate'
.. highlight: bash

plannotate
==========

.. conda:recipe:: plannotate
   :replaces_section_title:
   :noindex:

   Webserver and command line tool for annotating engineered plasmids

   :homepage: https://github.com/barricklab/pLannotate
   :license: GPL-3
   :recipe: /`plannotate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plannotate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plannotate/meta.yaml>`_

   


.. conda:package:: plannotate

   |downloads_plannotate| |docker_plannotate|

   :versions:
      
      

      ``1.2.0-3``,  ``1.2.0-2``,  ``1.2.0-1``,  ``1.2.0-0``

      

   
   :depends biopython: ``>1.77``
   :depends blast: ``>=2.10.1``
   :depends bokeh: ``2.4.1.*``
   :depends click: 
   :depends curl: 
   :depends diamond: ``>=2.0.13``
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3.7``
   :depends ripgrep: ``>=13.0.0``
   :depends streamlit: ``1.2.0.*``
   :depends tabulate: ``>=0.8.9``
   :depends trnascan-se: ``>=2.0.7``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install plannotate

   and update with::

      conda update plannotate

   or use the docker container::

      docker pull quay.io/biocontainers/plannotate:<tag>

   (see `plannotate/tags`_ for valid values for ``<tag>``)


.. |downloads_plannotate| image:: https://img.shields.io/conda/dn/bioconda/plannotate.svg?style=flat
   :target: https://anaconda.org/bioconda/plannotate
   :alt:   (downloads)
.. |docker_plannotate| image:: https://quay.io/repository/biocontainers/plannotate/status
   :target: https://quay.io/repository/biocontainers/plannotate
.. _`plannotate/tags`: https://quay.io/repository/biocontainers/plannotate?tab=tags


.. raw:: html

    <script>
        var package = "plannotate";
        var versions = ["1.2.0","1.2.0","1.2.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/plannotate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/plannotate/README.html
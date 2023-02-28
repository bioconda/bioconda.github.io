:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mercat2'
.. highlight: bash

mercat2
=======

.. conda:recipe:: mercat2
   :replaces_section_title:
   :noindex:

   versatile k\-mer counter and diversity estimator for database independent property analysis \(DIPA\) for multi\-omic analysis

   :homepage: https://github.com/raw-lab/mercat2
   :license: BSD / BSD-3-Clause
   :recipe: /`mercat2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mercat2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mercat2/meta.yaml>`_

   


.. conda:package:: mercat2

   |downloads_mercat2| |docker_mercat2|

   :versions:
      
      

      ``1.0-0``,  ``0.2-1``,  ``0.2-0``,  ``0.1-0``

      

   
   :depends configargparse: 
   :depends dominate: 
   :depends fastp: 
   :depends fastqc: 
   :depends grpcio: 
   :depends humanize: 
   :depends metaomestats: 
   :depends numpy: 
   :depends pandas: 
   :depends plotly: 
   :depends prodigal: 
   :depends psutil: 
   :depends python: ``<3.10``
   :depends python-kaleido: 
   :depends ray-core: 
   :depends ray-dashboard: 
   :depends ray-default: 
   :depends scikit-bio: 
   :depends scikit-learn: 
   :depends scipy: ``1.8.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mercat2

   and update with::

      conda update mercat2

   or use the docker container::

      docker pull quay.io/biocontainers/mercat2:<tag>

   (see `mercat2/tags`_ for valid values for ``<tag>``)


.. |downloads_mercat2| image:: https://img.shields.io/conda/dn/bioconda/mercat2.svg?style=flat
   :target: https://anaconda.org/bioconda/mercat2
   :alt:   (downloads)
.. |docker_mercat2| image:: https://quay.io/repository/biocontainers/mercat2/status
   :target: https://quay.io/repository/biocontainers/mercat2
.. _`mercat2/tags`: https://quay.io/repository/biocontainers/mercat2?tab=tags


.. raw:: html

    <script>
        var package = "mercat2";
        var versions = ["1.0","0.2","0.2","0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mercat2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mercat2/README.html
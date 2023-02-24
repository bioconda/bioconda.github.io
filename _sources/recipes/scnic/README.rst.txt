:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scnic'
.. highlight: bash

scnic
=====

.. conda:recipe:: scnic
   :replaces_section_title:
   :noindex:

   SCNIC\: Sparse Cooccurence Network Investigation for Compositional data

   :homepage: https://github.com/lozuponelab/SCNIC
   :license: BSD
   :recipe: /`scnic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scnic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scnic/meta.yaml>`_

   


.. conda:package:: scnic

   |downloads_scnic| |docker_scnic|

   :versions:
      
      

      ``0.6.3-0``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.3-0``,  ``0.5.1-0``

      

   
   :depends biom-format: 
   :depends fastspar: 
   :depends h5py: 
   :depends matplotlib-base: 
   :depends networkx: ``>2``
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3``
   :depends scikit-bio: 
   :depends scipy: 
   :depends seaborn: 
   :depends statsmodels: 
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install scnic

   and update with::

      conda update scnic

   or use the docker container::

      docker pull quay.io/biocontainers/scnic:<tag>

   (see `scnic/tags`_ for valid values for ``<tag>``)


.. |downloads_scnic| image:: https://img.shields.io/conda/dn/bioconda/scnic.svg?style=flat
   :target: https://anaconda.org/bioconda/scnic
   :alt:   (downloads)
.. |docker_scnic| image:: https://quay.io/repository/biocontainers/scnic/status
   :target: https://quay.io/repository/biocontainers/scnic
.. _`scnic/tags`: https://quay.io/repository/biocontainers/scnic?tab=tags


.. raw:: html

    <script>
        var package = "scnic";
        var versions = ["0.6.3","0.6.2","0.6.1","0.6.0","0.5.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scnic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scnic/README.html
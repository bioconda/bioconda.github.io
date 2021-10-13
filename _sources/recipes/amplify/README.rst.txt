:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'amplify'
.. highlight: bash

amplify
=======

.. conda:recipe:: amplify
   :replaces_section_title:
   :noindex:

   Attentive deep learning model for antimicrobial peptide prediction

   :homepage: https://github.com/bcgsc/AMPlify
   :license: GPL / GPL-3
   :recipe: /`amplify <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/amplify>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/amplify/meta.yaml>`_

   


.. conda:package:: amplify

   |downloads_amplify| |docker_amplify|

   :versions:
      
      

      ``1.0.1-3``,  ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends biopython: 
   :depends h5py: ``<3``
   :depends keras: ``2.2.4.*``
   :depends numpy: ``<1.17``
   :depends pandas: 
   :depends python: ``3.6.*``
   :depends scikit-learn: 
   :depends tensorflow: ``1.12.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install amplify

   and update with::

      conda update amplify

   or use the docker container::

      docker pull quay.io/biocontainers/amplify:<tag>

   (see `amplify/tags`_ for valid values for ``<tag>``)


.. |downloads_amplify| image:: https://img.shields.io/conda/dn/bioconda/amplify.svg?style=flat
   :target: https://anaconda.org/bioconda/amplify
   :alt:   (downloads)
.. |docker_amplify| image:: https://quay.io/repository/biocontainers/amplify/status
   :target: https://quay.io/repository/biocontainers/amplify
.. _`amplify/tags`: https://quay.io/repository/biocontainers/amplify?tab=tags


.. raw:: html

    <script>
        var package = "amplify";
        var versions = ["1.0.1","1.0.1","1.0.1","1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/amplify/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/amplify/README.html
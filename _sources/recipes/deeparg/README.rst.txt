:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deeparg'
.. highlight: bash

deeparg
=======

.. conda:recipe:: deeparg
   :replaces_section_title:
   :noindex:

   A deep learning based approach to predict Antibiotic Resistance Genes \(ARGs\) from metagenomes

   :homepage: https://bitbucket.org/gusphdproj/deeparg-ss/
   :license: MIT / MIT
   :recipe: /`deeparg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deeparg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deeparg/meta.yaml>`_

   


.. conda:package:: deeparg

   |downloads_deeparg| |docker_deeparg|

   :versions:
      
      

      ``1.0.2-1``,  ``1.0.2-0``

      

   
   :depends biopython: ``>=1.68``
   :depends diamond: 
   :depends ete3: ``>=3.1.2``
   :depends joblib: ``>=0.14.1``
   :depends lasagne: ``>=0.1``
   :depends nolearn: ``>=0.6.1``
   :depends numpy: ``>=1.16``
   :depends python: ``<3``
   :depends requests: ``>=1.15.1``
   :depends scikit-learn: ``>=0.19.2``
   :depends scipy: ``>=1.2.1``
   :depends theano: ``>=0.8.2``
   :depends tqdm: ``>=4.62.3``
   :depends wget: ``>=1.20.3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install deeparg

   and update with::

      conda update deeparg

   or use the docker container::

      docker pull quay.io/biocontainers/deeparg:<tag>

   (see `deeparg/tags`_ for valid values for ``<tag>``)


.. |downloads_deeparg| image:: https://img.shields.io/conda/dn/bioconda/deeparg.svg?style=flat
   :target: https://anaconda.org/bioconda/deeparg
   :alt:   (downloads)
.. |docker_deeparg| image:: https://quay.io/repository/biocontainers/deeparg/status
   :target: https://quay.io/repository/biocontainers/deeparg
.. _`deeparg/tags`: https://quay.io/repository/biocontainers/deeparg?tab=tags


.. raw:: html

    <script>
        var package = "deeparg";
        var versions = ["1.0.2","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deeparg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deeparg/README.html
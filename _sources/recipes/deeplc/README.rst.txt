:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deeplc'
.. highlight: bash

deeplc
======

.. conda:recipe:: deeplc
   :replaces_section_title:
   :noindex:

   DeepLC\: Retention time prediction for \(modified\) peptides using Deep Learning.

   :homepage: http://compomics.github.io/projects/DeepLC
   :developer docs: https://github.com/compomics/DeepLC
   :license: APACHE / Apache-2.0
   :recipe: /`deeplc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deeplc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deeplc/meta.yaml>`_

   


.. conda:package:: deeplc

   |downloads_deeplc| |docker_deeplc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.2.1-0</code>,  <code>0.2.0-0</code>,  <code>0.1.36-0</code>,  <code>0.1.35-0</code>,  <code>0.1.34-0</code>,  <code>0.1.33-0</code>,  <code>0.1.31-0</code>,  <code>0.1.30-0</code>,  <code>0.1.29-0</code>,  </span></summary>
      

      ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.36-0``,  ``0.1.35-0``,  ``0.1.34-0``,  ``0.1.33-0``,  ``0.1.31-0``,  ``0.1.30-0``,  ``0.1.29-0``,  ``0.1.16-0``,  ``0.1.15-0``,  ``0.1.14-0``,  ``0.1.13-0``,  ``0.1.12-0``,  ``0.1.11-0``,  ``0.1.10-0``,  ``0.1.7-0``,  ``0.1.6-0``,  ``0.1.4-0``,  ``0.1.2-0``,  ``0.1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends matplotlib-base: ``>=3,<4``
   :depends numpy: ``>=1.17,<2``
   :depends opt-einsum: 
   :depends pandas: ``>=0.25,<2``
   :depends pygam: ``>=0.8,<1``
   :depends python: ``>=3.6``
   :depends scikit-learn: ``>=0.24,<2.0``
   :depends scipy: ``>=1.4,<2``
   :depends setuptools: ``>=42``
   :depends tensorboard: ``>=2.2,<3``
   :depends tensorflow-base: ``>=2.2,<3``
   :depends tensorflow-estimator: ``>=2.2,<3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install deeplc

   and update with::

      conda update deeplc

   or use the docker container::

      docker pull quay.io/biocontainers/deeplc:<tag>

   (see `deeplc/tags`_ for valid values for ``<tag>``)


.. |downloads_deeplc| image:: https://img.shields.io/conda/dn/bioconda/deeplc.svg?style=flat
   :target: https://anaconda.org/bioconda/deeplc
   :alt:   (downloads)
.. |docker_deeplc| image:: https://quay.io/repository/biocontainers/deeplc/status
   :target: https://quay.io/repository/biocontainers/deeplc
.. _`deeplc/tags`: https://quay.io/repository/biocontainers/deeplc?tab=tags


.. raw:: html

    <script>
        var package = "deeplc";
        var versions = ["0.2.1","0.2.0","0.1.36","0.1.35","0.1.34"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deeplc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deeplc/README.html
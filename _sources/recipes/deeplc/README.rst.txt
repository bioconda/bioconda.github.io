:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deeplc'
.. highlight: bash

deeplc
======

.. conda:recipe:: deeplc
   :replaces_section_title:
   :noindex:

   DeepLC\: Retention time prediction for \(modified\) peptides using Deep Learning.

   :homepage: https://compomics.github.io/projects/DeepLC
   :developer docs: https://github.com/compomics/DeepLC
   :license: APACHE
   :recipe: /`deeplc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deeplc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deeplc/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41592-021-01301-5`, biotools: :biotools:`deeplc`

   


.. conda:package:: deeplc

   |downloads_deeplc| |docker_deeplc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.2.2-0</code>,  <code>2.2.1-0</code>,  <code>2.2.0-0</code>,  <code>2.1.9-0</code>,  <code>2.1.8-0</code>,  <code>1.1.2-0</code>,  <code>1.0.1-0</code>,  <code>1.0.0-0</code>,  <code>0.2.2-0</code>,  </span></summary>
      

      ``2.2.2-0``,  ``2.2.1-0``,  ``2.2.0-0``,  ``2.1.9-0``,  ``2.1.8-0``,  ``1.1.2-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.36-0``,  ``0.1.35-0``,  ``0.1.34-0``,  ``0.1.33-0``,  ``0.1.31-0``,  ``0.1.30-0``,  ``0.1.29-0``,  ``0.1.16-0``,  ``0.1.15-0``,  ``0.1.14-0``,  ``0.1.13-0``,  ``0.1.12-0``,  ``0.1.11-0``,  ``0.1.10-0``,  ``0.1.7-0``,  ``0.1.6-0``,  ``0.1.4-0``,  ``0.1.2-0``,  ``0.1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends deeplcretrainer: 
   :depends gooey: 
   :depends h5py: 
   :depends hdf5plugin: 
   :depends matplotlib-base: 
   :depends numpy: ``>=1.17,<2``
   :depends opt_einsum: 
   :depends pandas: ``>=0.25,<2``
   :depends psm-utils: 
   :depends pygam: 
   :depends python: ``>=3.7``
   :depends scikit-learn: 
   :depends scipy: 
   :depends tensorflow: ``>=2.2,<3``
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
        var versions = ["2.2.2","2.2.1","2.2.0","2.1.9","2.1.8"];
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
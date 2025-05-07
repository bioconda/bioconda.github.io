:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'im2deep'
.. highlight: bash

im2deep
=======

.. conda:recipe:: im2deep
   :replaces_section_title:
   :noindex:

   Framework for prediction of collisional cross\-section of peptides.

   :homepage: https://github.com/compomics/im2deep
   :license: APACHE / Apache-2.0
   :recipe: /`im2deep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/im2deep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/im2deep/meta.yaml>`_

   


.. conda:package:: im2deep

   |downloads_im2deep| |docker_im2deep|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.3-0</code>,  <code>1.0.2-0</code>,  <code>1.0.1-0</code>,  <code>0.3.1-1</code>,  <code>0.3.1-0</code>,  <code>0.2.0-0</code>,  <code>0.1.9-0</code>,  <code>0.1.8-0</code>,  <code>0.1.7-0</code>,  </span></summary>
      

      ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``0.3.1-1``,  ``0.3.1-0``,  ``0.2.0-0``,  ``0.1.9-0``,  ``0.1.8-0``,  ``0.1.7-0``,  ``0.1.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends click: 
   :depends deeplc: 
   :depends numpy: 
   :depends pandas: 
   :depends psm-utils: 
   :depends python: ``>=3.8``
   :depends rich: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install im2deep

   and update with::

      mamba update im2deep

  To create a new environment, run::

      mamba create --name myenvname im2deep

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/im2deep:<tag>

   (see `im2deep/tags`_ for valid values for ``<tag>``)


.. |downloads_im2deep| image:: https://img.shields.io/conda/dn/bioconda/im2deep.svg?style=flat
   :target: https://anaconda.org/bioconda/im2deep
   :alt:   (downloads)
.. |docker_im2deep| image:: https://quay.io/repository/biocontainers/im2deep/status
   :target: https://quay.io/repository/biocontainers/im2deep
.. _`im2deep/tags`: https://quay.io/repository/biocontainers/im2deep?tab=tags


.. raw:: html

    <script>
        var package = "im2deep";
        var versions = ["1.0.3","1.0.2","1.0.1","0.3.1","0.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/im2deep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/im2deep/README.html
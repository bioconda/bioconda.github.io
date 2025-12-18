:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scenicplus'
.. highlight: bash

scenicplus
==========

.. conda:recipe:: scenicplus
   :replaces_section_title:
   :noindex:

   SCENIC\+ is a python package to build gene regulatory networks \(GRNs\) using combined or separate single\-cell gene expression \(scRNA\-seq\) and single\-cell chromatin accessibility \(scATAC\-seq\) data.

   :homepage: https://github.com/aertslab/scenicplus
   :license: OTHER
   :recipe: /`scenicplus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scenicplus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scenicplus/meta.yaml>`_

   


.. conda:package:: scenicplus

   |downloads_scenicplus| |docker_scenicplus|

   :versions:
      
      

      ``1.0a2-0``

      

   
   :depends numpy: 
   :depends pandas: 
   :depends pycistarget: 
   :depends python: ``>=3.8,<3.11.9``
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

      mamba install scenicplus

   and update with::

      mamba update scenicplus

  To create a new environment, run::

      mamba create --name myenvname scenicplus

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/scenicplus:<tag>

   (see `scenicplus/tags`_ for valid values for ``<tag>``)


.. |downloads_scenicplus| image:: https://img.shields.io/conda/dn/bioconda/scenicplus.svg?style=flat
   :target: https://anaconda.org/bioconda/scenicplus
   :alt:   (downloads)
.. |docker_scenicplus| image:: https://quay.io/repository/biocontainers/scenicplus/status
   :target: https://quay.io/repository/biocontainers/scenicplus
.. _`scenicplus/tags`: https://quay.io/repository/biocontainers/scenicplus?tab=tags


.. raw:: html

    <script>
        var package = "scenicplus";
        var versions = ["1.0a2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scenicplus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scenicplus/README.html
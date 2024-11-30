:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'regional'
.. highlight: bash

regional
========

.. conda:recipe:: regional
   :replaces_section_title:
   :noindex:

   simple manipulation and display of spatial regions in python

   :homepage: https://github.com/freeman-lab/regional
   :license: MIT
   :recipe: /`regional <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/regional>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/regional/meta.yaml>`_

   


.. conda:package:: regional

   |downloads_regional| |docker_regional|

   :versions:
      
      

      ``1.1.2-1``,  ``1.1.2-0``

      

   
   :depends matplotlib: 
   :depends numpy: ``!=1.13.0``
   :depends python: 
   :depends scipy: 
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

      mamba install regional

   and update with::

      mamba update regional

  To create a new environment, run::

      mamba create --name myenvname regional

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/regional:<tag>

   (see `regional/tags`_ for valid values for ``<tag>``)


.. |downloads_regional| image:: https://img.shields.io/conda/dn/bioconda/regional.svg?style=flat
   :target: https://anaconda.org/bioconda/regional
   :alt:   (downloads)
.. |docker_regional| image:: https://quay.io/repository/biocontainers/regional/status
   :target: https://quay.io/repository/biocontainers/regional
.. _`regional/tags`: https://quay.io/repository/biocontainers/regional?tab=tags


.. raw:: html

    <script>
        var package = "regional";
        var versions = ["1.1.2","1.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/regional/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/regional/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'edittag'
.. highlight: bash

edittag
=======

.. conda:recipe:: edittag
   :replaces_section_title:
   :noindex:

   Design and check sets of edit metric sequence tags.

   :homepage: http://github.com/faircloth-lab/edittag/
   :license: http://www.opensource.org/licenses/BSD-3-Clause
   :recipe: /`edittag <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/edittag>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/edittag/meta.yaml>`_

   


.. conda:package:: edittag

   |downloads_edittag| |docker_edittag|

   :versions:
      
      

      ``1.1-2``,  ``1.1-1``,  ``1.1-0``

      

   
   :depends numpy: ``>=1.3``
   :depends python: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install edittag

   and update with::

      mamba update edittag

  To create a new environment, run::

      mamba create --name myenvname edittag

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/edittag:<tag>

   (see `edittag/tags`_ for valid values for ``<tag>``)


.. |downloads_edittag| image:: https://img.shields.io/conda/dn/bioconda/edittag.svg?style=flat
   :target: https://anaconda.org/bioconda/edittag
   :alt:   (downloads)
.. |docker_edittag| image:: https://quay.io/repository/biocontainers/edittag/status
   :target: https://quay.io/repository/biocontainers/edittag
.. _`edittag/tags`: https://quay.io/repository/biocontainers/edittag?tab=tags


.. raw:: html

    <script>
        var package = "edittag";
        var versions = ["1.1","1.1","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/edittag/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/edittag/README.html
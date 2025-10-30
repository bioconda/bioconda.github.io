:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bronko'
.. highlight: bash

bronko
======

.. conda:recipe:: bronko
   :replaces_section_title:
   :noindex:

   bronko is an ultra\-rapid mapping free variant caller for viral amplicon sequencing data

   :homepage: https://github.com/treangenlab/bronko
   :documentation: https://github.com/treangenlab/bronko/blob/main/README.md
   
   :license: MIT / MIT
   :recipe: /`bronko <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bronko>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bronko/meta.yaml>`_

   


.. conda:package:: bronko

   |downloads_bronko| |docker_bronko|

   :versions:
      
      

      ``0.0.3-0``,  ``0.0.2-0``,  ``0.0.1-0``

      

   
   :depends kmc: ``>=3.2``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>-</code>,  <code>l</code>,  <code>i</code>,  <code>n</code>,  <code>u</code>,  <code>x</code>,  <code>-</code>,  <code>a</code>,  <code>a</code>,  <code>r</code>,  <code>c</code>,  <code>h</code>,  <code>6</code>,  <code>4</code>,  <code> </code>,  <code>-</code>,  <code>o</code>,  <code>s</code>,  <code>x</code>,  <code>-</code>,  <code>a</code>,  <code>r</code>,  <code>m</code>,  <code>6</code>,  <code>4</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bronko

   and update with::

      mamba update bronko

  To create a new environment, run::

      mamba create --name myenvname bronko

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bronko:<tag>

   (see `bronko/tags`_ for valid values for ``<tag>``)


.. |downloads_bronko| image:: https://img.shields.io/conda/dn/bioconda/bronko.svg?style=flat
   :target: https://anaconda.org/bioconda/bronko
   :alt:   (downloads)
.. |docker_bronko| image:: https://quay.io/repository/biocontainers/bronko/status
   :target: https://quay.io/repository/biocontainers/bronko
.. _`bronko/tags`: https://quay.io/repository/biocontainers/bronko?tab=tags


.. raw:: html

    <script>
        var package = "bronko";
        var versions = ["0.0.3","0.0.2","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bronko/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bronko/README.html
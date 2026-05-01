:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'reaper-trim'
.. highlight: bash

reaper-trim
===========

.. conda:recipe:: reaper-trim
   :replaces_section_title:
   :noindex:

   Tool for demultiplexing\, trimming and filtering sequencing data.

   :homepage: https://github.com/micans/reaper
   :documentation: https://gensoft.pasteur.fr/docs/reaper/15-065/reaper.html
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`reaper-trim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/reaper-trim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/reaper-trim/meta.yaml>`_
   :links: biotools: :biotools:`reaper`

   


.. conda:package:: reaper-trim

   |downloads_reaper-trim| |docker_reaper-trim|

   :versions:
      
      

      ``17.257-0``

      

   
   :depends on libgcc: ``>=14``
   :depends on libzlib: ``>=1.3.2,<2.0a0``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install reaper-trim

to add into an existing workspace instead, run::

    pixi add reaper-trim

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install reaper-trim

Alternatively, to install into a new environment, run::

    conda create -n envname reaper-trim

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/reaper-trim:<tag>

(see `reaper-trim/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_reaper-trim| image:: https://img.shields.io/conda/dn/bioconda/reaper-trim.svg?style=flat
   :target: https://anaconda.org/bioconda/reaper-trim
   :alt:   (downloads)
.. |docker_reaper-trim| image:: https://quay.io/repository/biocontainers/reaper-trim/status
   :target: https://quay.io/repository/biocontainers/reaper-trim
.. _`reaper-trim/tags`: https://quay.io/repository/biocontainers/reaper-trim?tab=tags


.. raw:: html

    <script>
        var package = "reaper-trim";
        var versions = ["17.257"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/reaper-trim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/reaper-trim/README.html
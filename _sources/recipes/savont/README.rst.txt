:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'savont'
.. highlight: bash

savont
======

.. conda:recipe:: savont
   :replaces_section_title:
   :noindex:

   Amplicon sequencing variants \(ASVs\) and taxonomic profiling from modern long\-read \(nanopore \+ PacBio\) amplicon sequencing with \> 98\% accuracy.

   :homepage: https://github.com/bluenote-1577/savont
   :license: MIT / MIT
   :recipe: /`savont <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/savont>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/savont/meta.yaml>`_

   


.. conda:package:: savont

   |downloads_savont| |docker_savont|

   :versions:
      
      

      ``0.3.2-0``,  ``0.2.0-0``,  ``0.1.0-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``

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

    pixi global install savont

to add into an existing workspace instead, run::

    pixi add savont

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install savont

Alternatively, to install into a new environment, run::

    conda create -n envname savont

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/savont:<tag>

(see `savont/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_savont| image:: https://img.shields.io/conda/dn/bioconda/savont.svg?style=flat
   :target: https://anaconda.org/bioconda/savont
   :alt:   (downloads)
.. |docker_savont| image:: https://quay.io/repository/biocontainers/savont/status
   :target: https://quay.io/repository/biocontainers/savont
.. _`savont/tags`: https://quay.io/repository/biocontainers/savont?tab=tags


.. raw:: html

    <script>
        var package = "savont";
        var versions = ["0.3.2","0.2.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/savont/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/savont/README.html
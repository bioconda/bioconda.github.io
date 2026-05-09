:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snap'
.. highlight: bash

snap
====

.. conda:recipe:: snap
   :replaces_section_title:
   :noindex:

   Semi\-HMM\-based Nucleic Acid Parser \- a gene prediction tool.

   :homepage: https://github.com/KorfLab/SNAP
   :documentation: https://github.com/KorfLab/SNAP/blob/master/README.md
   
   :license: MIT / MIT
   :recipe: /`snap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snap/meta.yaml>`_
   :links: doi: :doi:`10.1186/1471-2105-5-59`, biotools: :biotools:`snap`, usegalaxy-eu: :usegalaxy-eu:`snap_training`

   


.. conda:package:: snap

   |downloads_snap| |docker_snap|

   :versions:
      
      

      ``2017_03_01-0``,  ``2013_11_29-6``,  ``2013_11_29-5``,  ``2013_11_29-4``,  ``2013_11_29-3``,  ``2013_11_29-2``,  ``2013_11_29-1``,  ``2013_11_29-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on perl: 

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

    pixi global install snap

to add into an existing workspace instead, run::

    pixi add snap

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install snap

Alternatively, to install into a new environment, run::

    conda create -n envname snap

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/snap:<tag>

(see `snap/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_snap| image:: https://img.shields.io/conda/dn/bioconda/snap.svg?style=flat
   :target: https://anaconda.org/bioconda/snap
   :alt:   (downloads)
.. |docker_snap| image:: https://quay.io/repository/biocontainers/snap/status
   :target: https://quay.io/repository/biocontainers/snap
.. _`snap/tags`: https://quay.io/repository/biocontainers/snap?tab=tags


.. raw:: html

    <script>
        var package = "snap";
        var versions = ["2017_03_01","2013_11_29","2013_11_29","2013_11_29","2013_11_29"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snap/README.html
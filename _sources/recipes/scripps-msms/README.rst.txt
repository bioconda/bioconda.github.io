:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scripps-msms'
.. highlight: bash

scripps-msms
============

.. conda:recipe:: scripps-msms
   :replaces_section_title:
   :noindex:

   Fast algorithm for computing molecular surfaces

   :homepage: https://ccsb.scripps.edu/msms/
   :documentation: https://ccsb.scripps.edu/msms/documentation/
   
   :license: Free for academic use (research-only license)
   :recipe: /`scripps-msms <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scripps-msms>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scripps-msms/meta.yaml>`_
   :links: doi: :doi:`10.1002/(SICI)1097-0282(199603)38:3<305::AID-BIP4>3.0.CO;2-Y`

   MSMS is a fast algorithm for computing molecular surfaces.
   It was developed by Dr. Michel F. Sanner as part of his PhD thesis.
   It has been widely used for computing and displaying Solvent Excluded Surfaces for proteins.
   MSMS is used by various molecular visualization programs including VMD\, Chimera\, and PMV.



.. conda:package:: scripps-msms

   |downloads_scripps-msms| |docker_scripps-msms|

   :versions:
      
      

      ``2.6.1-0``

      

   

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>osx-arm64</code></span>
      

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

    pixi global install scripps-msms

to add into an existing workspace instead, run::

    pixi add scripps-msms

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install scripps-msms

Alternatively, to install into a new environment, run::

    conda create -n envname scripps-msms

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/scripps-msms:<tag>

(see `scripps-msms/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_scripps-msms| image:: https://img.shields.io/conda/dn/bioconda/scripps-msms.svg?style=flat
   :target: https://anaconda.org/bioconda/scripps-msms
   :alt:   (downloads)
.. |docker_scripps-msms| image:: https://quay.io/repository/biocontainers/scripps-msms/status
   :target: https://quay.io/repository/biocontainers/scripps-msms
.. _`scripps-msms/tags`: https://quay.io/repository/biocontainers/scripps-msms?tab=tags


.. raw:: html

    <script>
        var package = "scripps-msms";
        var versions = ["2.6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scripps-msms/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scripps-msms/README.html
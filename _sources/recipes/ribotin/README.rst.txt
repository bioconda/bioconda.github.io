:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ribotin'
.. highlight: bash

ribotin
=======

.. conda:recipe:: ribotin
   :replaces_section_title:
   :noindex:

   Ribosomal DNA assembly tool.

   :homepage: https://github.com/maickrau/ribotin
   :documentation: https://github.com/maickrau/ribotin/blob/v1.5/README.md
   
   :license: MIT / MIT
   :recipe: /`ribotin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ribotin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ribotin/meta.yaml>`_

   


.. conda:package:: ribotin

   |downloads_ribotin| |docker_ribotin|

   :versions:
      
      

      ``1.5-0``,  ``1.4-0``,  ``1.3-0``,  ``1.2-1``,  ``1.2-0``,  ``1.1-0``,  ``1.0-0``

      

   
   :depends on bamtools: ``>=2.5.3,<3.0a0``
   :depends on graphaligner: 
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on liftoff: ``1.6.3.*``
   :depends on mbg: ``>=1.0.17``
   :depends on samtools: 
   :depends on winnowmap: 

   :additional platforms:
      

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

    pixi global install ribotin

to add into an existing workspace instead, run::

    pixi add ribotin

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ribotin

Alternatively, to install into a new environment, run::

    conda create -n envname ribotin

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ribotin:<tag>

(see `ribotin/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ribotin| image:: https://img.shields.io/conda/dn/bioconda/ribotin.svg?style=flat
   :target: https://anaconda.org/bioconda/ribotin
   :alt:   (downloads)
.. |docker_ribotin| image:: https://quay.io/repository/biocontainers/ribotin/status
   :target: https://quay.io/repository/biocontainers/ribotin
.. _`ribotin/tags`: https://quay.io/repository/biocontainers/ribotin?tab=tags


.. raw:: html

    <script>
        var package = "ribotin";
        var versions = ["1.5","1.4","1.3","1.2","1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ribotin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ribotin/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'xxmotif'
.. highlight: bash

xxmotif
=======

.. conda:recipe:: xxmotif
   :replaces_section_title:
   :noindex:

   eXhaustive\, weight matriX\-based motif discovery in nucleotide sequences

   :homepage: https://github.com/soedinglab/xxmotif
   :license: GPLv3
   :recipe: /`xxmotif <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xxmotif>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xxmotif/meta.yaml>`_

   


.. conda:package:: xxmotif

   |downloads_xxmotif| |docker_xxmotif|

   :versions:
      
      

      ``1.6-4``,  ``1.6-2``,  ``1.6-1``,  ``1.6-0``

      

   
   :depends on libgcc-ng: ``>=12``
   :depends on libstdcxx-ng: ``>=12``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install xxmotif

to add into an existing workspace instead, run::

    pixi add xxmotif

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install xxmotif

Alternatively, to install into a new environment, run::

    conda create -n envname xxmotif

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/xxmotif:<tag>

(see `xxmotif/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_xxmotif| image:: https://img.shields.io/conda/dn/bioconda/xxmotif.svg?style=flat
   :target: https://anaconda.org/bioconda/xxmotif
   :alt:   (downloads)
.. |docker_xxmotif| image:: https://quay.io/repository/biocontainers/xxmotif/status
   :target: https://quay.io/repository/biocontainers/xxmotif
.. _`xxmotif/tags`: https://quay.io/repository/biocontainers/xxmotif?tab=tags


.. raw:: html

    <script>
        var package = "xxmotif";
        var versions = ["1.6","1.6","1.6","1.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/xxmotif/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/xxmotif/README.html
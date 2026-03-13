:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioformats'
.. highlight: bash

bioformats
==========

.. conda:recipe:: bioformats
   :replaces_section_title:
   :noindex:

   A collection of Python classes to handle bioinformatics data.

   :homepage: https://github.com/gtamazian/bioformats
   :license: MIT
   :recipe: /`bioformats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioformats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioformats/meta.yaml>`_

   


.. conda:package:: bioformats

   |downloads_bioformats| |docker_bioformats|

   :versions:
      
      

      ``0.1.15-2``,  ``0.1.15-1``,  ``0.1.15-0``

      

   
   :depends on future: 
   :depends on pyfaidx: 
   :depends on python: 
   :depends on pyvcf: 

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

    pixi global install bioformats

to add into an existing workspace instead, run::

    pixi add bioformats

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioformats

Alternatively, to install into a new environment, run::

    conda create -n envname bioformats

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioformats:<tag>

(see `bioformats/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioformats| image:: https://img.shields.io/conda/dn/bioconda/bioformats.svg?style=flat
   :target: https://anaconda.org/bioconda/bioformats
   :alt:   (downloads)
.. |docker_bioformats| image:: https://quay.io/repository/biocontainers/bioformats/status
   :target: https://quay.io/repository/biocontainers/bioformats
.. _`bioformats/tags`: https://quay.io/repository/biocontainers/bioformats?tab=tags


.. raw:: html

    <script>
        var package = "bioformats";
        var versions = ["0.1.15","0.1.15","0.1.15"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioformats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioformats/README.html
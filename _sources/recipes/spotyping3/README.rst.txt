:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'spotyping3'
.. highlight: bash

spotyping3
==========

.. conda:recipe:: spotyping3
   :replaces_section_title:
   :noindex:

   SpoTyping3\: fast and accurate in silico Mycobacterium spoligotyping from sequence reads\, compatible with Python3

   :homepage: https://github.com/matnguyen/SpoTyping
   :license: GPL / GPL-3
   :recipe: /`spotyping3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spotyping3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spotyping3/meta.yaml>`_
   :links: DOI: :DOI:`10.1186/s13073-016-0270-7`

   


.. conda:package:: spotyping3

   |downloads_spotyping3| |docker_spotyping3|

   :versions:
      
      

      ``3.0-0``

      

   
   :depends on blast: 
   :depends on python: ``>=3.5``
   :depends on r-gdata: 

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

    pixi global install spotyping3

to add into an existing workspace instead, run::

    pixi add spotyping3

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install spotyping3

Alternatively, to install into a new environment, run::

    conda create -n envname spotyping3

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/spotyping3:<tag>

(see `spotyping3/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_spotyping3| image:: https://img.shields.io/conda/dn/bioconda/spotyping3.svg?style=flat
   :target: https://anaconda.org/bioconda/spotyping3
   :alt:   (downloads)
.. |docker_spotyping3| image:: https://quay.io/repository/biocontainers/spotyping3/status
   :target: https://quay.io/repository/biocontainers/spotyping3
.. _`spotyping3/tags`: https://quay.io/repository/biocontainers/spotyping3?tab=tags


.. raw:: html

    <script>
        var package = "spotyping3";
        var versions = ["3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/spotyping3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/spotyping3/README.html
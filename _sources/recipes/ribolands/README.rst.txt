:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ribolands'
.. highlight: bash

ribolands
=========

.. conda:recipe:: ribolands
   :replaces_section_title:
   :noindex:

   Energy landscapes and folding kinetics of nucleic acids

   :homepage: https://github.com/bad-ants-fleet/ribolands
   :license: MIT
   :recipe: /`ribolands <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ribolands>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ribolands/meta.yaml>`_

   


.. conda:package:: ribolands

   |downloads_ribolands| |docker_ribolands|

   :versions:
      
      

      ``0.6.1-0``

      

   
   :depends on barriers: 
   :depends on crnsimulator: 
   :depends on future: 
   :depends on matplotlib-base: 
   :depends on networkx: 
   :depends on pandas: 
   :depends on python: ``<3.9``
   :depends on treekin: 
   :depends on viennarna: 

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

    pixi global install ribolands

to add into an existing workspace instead, run::

    pixi add ribolands

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ribolands

Alternatively, to install into a new environment, run::

    conda create -n envname ribolands

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ribolands:<tag>

(see `ribolands/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ribolands| image:: https://img.shields.io/conda/dn/bioconda/ribolands.svg?style=flat
   :target: https://anaconda.org/bioconda/ribolands
   :alt:   (downloads)
.. |docker_ribolands| image:: https://quay.io/repository/biocontainers/ribolands/status
   :target: https://quay.io/repository/biocontainers/ribolands
.. _`ribolands/tags`: https://quay.io/repository/biocontainers/ribolands?tab=tags


.. raw:: html

    <script>
        var package = "ribolands";
        var versions = ["0.6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ribolands/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ribolands/README.html
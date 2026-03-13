:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'xmltramp2'
.. highlight: bash

xmltramp2
=========

.. conda:recipe:: xmltramp2
   :replaces_section_title:
   :noindex:

   A modern refactoring of the venerable xmltramp application

   :homepage: https://github.com/tBaxter/xmltramp2
   :license: GPL / GNU General Public License v2 (GPLv2)
   :recipe: /`xmltramp2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xmltramp2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xmltramp2/meta.yaml>`_

   


.. conda:package:: xmltramp2

   |downloads_xmltramp2| |docker_xmltramp2|

   :versions:
      
      

      ``3.1.1-1``,  ``3.1.1-0``

      

   
   :depends on python: 
   :depends on six: 

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

    pixi global install xmltramp2

to add into an existing workspace instead, run::

    pixi add xmltramp2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install xmltramp2

Alternatively, to install into a new environment, run::

    conda create -n envname xmltramp2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/xmltramp2:<tag>

(see `xmltramp2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_xmltramp2| image:: https://img.shields.io/conda/dn/bioconda/xmltramp2.svg?style=flat
   :target: https://anaconda.org/bioconda/xmltramp2
   :alt:   (downloads)
.. |docker_xmltramp2| image:: https://quay.io/repository/biocontainers/xmltramp2/status
   :target: https://quay.io/repository/biocontainers/xmltramp2
.. _`xmltramp2/tags`: https://quay.io/repository/biocontainers/xmltramp2?tab=tags


.. raw:: html

    <script>
        var package = "xmltramp2";
        var versions = ["3.1.1","3.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/xmltramp2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/xmltramp2/README.html
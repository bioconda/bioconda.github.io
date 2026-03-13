:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ezclermont'
.. highlight: bash

ezclermont
==========

.. conda:recipe:: ezclermont
   :replaces_section_title:
   :noindex:

   easily determine the Clermont 2013 E coli phylotype

   :homepage: https://github.com/nickp60/ezclermont
   :developer docs: https://github.com/nickp60/barrnap-python
   :license: MIT / MIT License
   :recipe: /`ezclermont <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ezclermont>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ezclermont/meta.yaml>`_

   Determines the Clermont 2013 phylotype of a given E coli strain by performing in silico quadriplex PCR


.. conda:package:: ezclermont

   |downloads_ezclermont| |docker_ezclermont|

   :versions:
      
      

      ``0.7.0-0``,  ``0.6.3-0``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.5.0-0``,  ``0.4.3-0``

      

   
   :depends on biopython: 
   :depends on coverage: 
   :depends on python: ``>=3.5``

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

    pixi global install ezclermont

to add into an existing workspace instead, run::

    pixi add ezclermont

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ezclermont

Alternatively, to install into a new environment, run::

    conda create -n envname ezclermont

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ezclermont:<tag>

(see `ezclermont/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ezclermont| image:: https://img.shields.io/conda/dn/bioconda/ezclermont.svg?style=flat
   :target: https://anaconda.org/bioconda/ezclermont
   :alt:   (downloads)
.. |docker_ezclermont| image:: https://quay.io/repository/biocontainers/ezclermont/status
   :target: https://quay.io/repository/biocontainers/ezclermont
.. _`ezclermont/tags`: https://quay.io/repository/biocontainers/ezclermont?tab=tags


.. raw:: html

    <script>
        var package = "ezclermont";
        var versions = ["0.7.0","0.6.3","0.6.2","0.6.1","0.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ezclermont/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ezclermont/README.html